import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IteamChatComponent } from './iteam-chat/iteam-chat.component';



@NgModule({  //MODULO ANGULAR
  declarations: [
    IteamChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IteamChatComponent
  ]
})
export class ComponentsModule { }
