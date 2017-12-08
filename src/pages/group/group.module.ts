import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Group } from './group';

@NgModule({
  declarations: [
    Group,
  ],
  imports: [
    IonicPageModule.forChild(Group),
  ],
  exports: [
    Group
  ]
})
export class GroupModule {}
