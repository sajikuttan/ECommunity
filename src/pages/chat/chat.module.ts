import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Chats } from './chat';

@NgModule({
  declarations: [
    Chats,
  ],
  imports: [
    IonicPageModule.forChild(Chats),
  ],
  exports: [
    Chats
  ]
})
export class ChatModule {}
