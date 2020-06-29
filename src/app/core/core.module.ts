import { TaskService } from './task.service';
import { ChatService } from './chat.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '@environments/environment';
import { SharedModule } from '@shared/shared.module';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


const config: SocketIoConfig = { url: environment.chat.url + ':' + environment.chat.port, options: {} };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    AuthService,
    ChatService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
   }
  ]
})
export class CoreModule { }
