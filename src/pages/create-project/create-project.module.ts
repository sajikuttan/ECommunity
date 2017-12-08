import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProject } from './create-project';

@NgModule({
  declarations: [
    CreateProject,
  ],
  imports: [
    IonicPageModule.forChild(CreateProject),
  ],
  exports: [
    CreateProject
  ]
})
export class CreateProjectModule {}
