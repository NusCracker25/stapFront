import { NGXLogger } from 'ngx-logger';
import { Component, OnInit , Inject } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { ChatMessage } from '@core/model/chat-message';
import { ChatService } from '@core/chat.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'stap-discussion-thread',
  templateUrl: './discussion-thread.component.html',
  styleUrls: ['./discussion-thread.component.scss']
})
export class DiscussionThreadComponent implements OnInit {

  newMessage: string;
  messageList: ChatMessage[] = [];

  discussionMeta: object;

  constructor( private chat: ChatService,
               public auth: AuthService,
               private logger: NGXLogger,
               private dialogRef: MatDialogRef<DiscussionThreadComponent>,
               @Inject(MAT_DIALOG_DATA) data) {

    this.discussionMeta = data;
  }

  ngOnInit(): void {
    this.chat
      .getMessages()
      .subscribe((message: ChatMessage) => {
        this.messageList.push(message);
      }
    );
  }

  sendMessage() {
    this.chat.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}

