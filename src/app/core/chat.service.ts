import { ChatMessage } from './model/chat-message';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private socket: Socket,
               private auth: AuthService,
               private logger: NGXLogger ) { }

  public sendMessage(message: string){
    this.socket.emit('chatMessage',  message);
  }

  public getMessages = () => {
    return Observable.create( ( observer) => {
      this.socket.on('message' , ( message) => {
        this.logger.log('new message ', message);
        const chatMess = new ChatMessage();
        chatMess.body = message.body;
        chatMess.from = message.username;
        chatMess.time = message.time;
        observer.next(chatMess);
      });
    });
  }

  public joinDiscussion(){
    if ( this.auth.isLoggedIn()){
      this.socket.emit('joinRoom', {username: this.auth.currentUser.username, room: null});
    } else{
      this.socket.emit('joinRoom', {username: null, room: null});
    }
  }
}

