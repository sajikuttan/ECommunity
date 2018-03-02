import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssignmentCreatePage } from './assignment-create';

@NgModule({
  declarations: [
    AssignmentCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(AssignmentCreatePage),
  ],
})
export class AssignmentCreatePageModule {}
