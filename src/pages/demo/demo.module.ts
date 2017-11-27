import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo } from './demo';

@NgModule({
  declarations: [
    Demo,
  ],
  imports: [
    IonicPageModule.forChild(Demo),
  ],
  exports: [
    Demo
  ]
})
export class DemoModule {}
