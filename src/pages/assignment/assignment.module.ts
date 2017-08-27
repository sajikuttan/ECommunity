import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Assignment } from './assignment';

@NgModule({
  declarations: [
    Assignment,
  ],
  imports: [
    IonicPageModule.forChild(Assignment),
  ],
  exports: [
    Assignment
  ]
})
export class AssignmentModule {}
