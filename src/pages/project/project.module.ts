import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Project } from './project';

@NgModule({
  declarations: [
    Project,
  ],
  imports: [
    IonicPageModule.forChild(Project),
  ],
  exports: [
    Project
  ]
})
export class ProjectModule {}
