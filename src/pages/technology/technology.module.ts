import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Technology } from './technology';

@NgModule({
  declarations: [
    Technology,
  ],
  imports: [
    IonicPageModule.forChild(Technology),
  ],
  exports: [
    Technology
  ]
})
export class TechnologyModule {}
