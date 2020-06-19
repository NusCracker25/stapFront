import { DiscussionThreadComponent } from './../discussion-thread/discussion-thread.component';

import { NGXLogger } from 'ngx-logger';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Component, OnInit , Inject } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { ChatMessage } from '@core/model/chat-message';
import { ChatService } from '@core/chat.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'stap-chat-entry',
  templateUrl: './chat-entry.component.html',
  styleUrls: ['./chat-entry.component.scss']
})
export class ChatEntryComponent implements OnInit {
  newMessage: string;
  messageList: ChatMessage[] = [];

  // horizontal position for new message notification
  horPos: MatSnackBarHorizontalPosition = 'right';
  // are notification activated
  newMessageNotification = true;

  constructor( private chat: ChatService,
               public auth: AuthService,
               public router: Router,
               private snackBar: MatSnackBar,
               private logger: NGXLogger,
               public chatDialog: MatDialog) { }

  ngOnInit(): void {
    this.chat
      .getMessages()
      .subscribe((message: ChatMessage) => {
        this.messageList.push(message);
        if ( this.newMessageNotification){
          const snackBarRef = this.snackBar.open(
            message.body,
            'open',
            {
              duration: 5000,
              horizontalPosition: this.horPos
            }
          );
          snackBarRef.onAction().subscribe(() => {
            this.openDialog();
          });
        }

      });
    this.chat.joinDiscussion();
  }

  sendMessage() {
    this.chat.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  openDialog(): void {
    // definition of dialog options
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = false;
    dialogConfig.position = {
      bottom: '0',
      right: '0'
    };
    dialogConfig.height = '500';
    dialogConfig.maxHeight = '500';
    dialogConfig.width = '200';
    dialogConfig.closeOnNavigation = true;

    dialogConfig.data = {
      id: 1,
      title: 'StapChat in Stapler'
    };
    const dialogRef = this.chatDialog.open( DiscussionThreadComponent, dialogConfig);
    this.newMessageNotification = false;

    dialogRef.afterClosed().subscribe(result => {
      this.logger.info('The dialog was closed');
      // this.animal = result;
      // when chat dialog is closed, we reactivate snackbar notification
      // todo: reactivate based on user' settings, or previous state of notification
      this.newMessageNotification = true;
    });
  }
}
