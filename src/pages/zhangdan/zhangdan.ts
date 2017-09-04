import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZhangdanPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:"zhangDan"
})
@Component({
  selector: 'page-zhangdan',
  templateUrl: 'zhangdan.html',
})
export class ZhangdanPage {

  name:string = "我的账单";
  rightPage:string = "收支明细";
  rightPageUrl:string = "paymentDetail";

  pet: string = "puppies";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZhangdanPage');
  }

}
