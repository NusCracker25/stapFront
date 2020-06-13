import { ChatEntryComponent } from './chat-entry/chat-entry.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionThreadComponent } from './discussion-thread/discussion-thread.component';

@NgModule({
  declarations: [DiscussionThreadComponent, ChatEntryComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ChatEntryComponent
  ],
  entryComponents: [ DiscussionThreadComponent]
})
export class ChatModule { }
