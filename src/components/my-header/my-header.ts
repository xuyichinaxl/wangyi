import { NavController } from 'ionic-angular';
import { Component, Output, Input } from '@angular/core';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'my-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @Input("name") name:string;

  @Input("rightPage") next:string;

  @Input("nextPageUrl") nextUrl:string;

  text: string;

  constructor(public navCtrl:NavController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }

  backHistory(){
    this.navCtrl.pop();
  }

  rightPage(){
    this.navCtrl.push(this.nextUrl);
  }

}
