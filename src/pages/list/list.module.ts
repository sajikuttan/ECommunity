import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {
    public data = ['PHP','JAVA','MYSQL'];
    public data2 = ['ANGULAR','TYPESCRIPT','ASP','TESTING','CPP','C','PYTHON','RUBY'];
}
