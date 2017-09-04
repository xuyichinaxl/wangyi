import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZhangdanPage } from './zhangdan';
import { HeaderComponent } from "../../components/my-header/my-header";

@NgModule({
  declarations: [
    ZhangdanPage,
    HeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(ZhangdanPage),
  ],
})
export class ZhangdanPageModule {}
