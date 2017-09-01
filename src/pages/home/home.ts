import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Content, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content:Content

  @ViewChild(Slides) slides:Slides

  eve:any;
  navsBackground:string = "rgba(255,255,255,1)";
  logoOpacity:number = 1;
  indexCateItemOpacity:number = 1;
  zhangdan:string = "rgb(0,0,0)";
  categoryItems:Array<CategoryItem>;
  constructor(public navCtrl: NavController,public ngzone:NgZone) {

  }

  ionViewDidLoad(){
    this.slides.autoplayDisableOnInteraction= false;
    this.content.ionScroll.subscribe(($event)=>{
      this.ngzone.run(()=>{
        this.eve = $event;
        let top = this.eve.scrollTop;
        this.logoOpacity = 1-top*0.1 > 0?(1-top*0.1):0;
        if(top>20){
          top = top-20;
          let navsOpacity = top * 0.01;//导航透明度渐变
          let zhangdanColor = 255*top*0.05>255?255:255*top*0.05;
          this.zhangdan = `rgb(${zhangdanColor},${zhangdanColor},${zhangdanColor})`;
          
          this.navsBackground = `rgba(255,0,0,${navsOpacity})`;
          
          this.indexCateItemOpacity = 1-top*0.04 > 0?(1-top*0.04):0;
        }else{
          this.zhangdan = "rgb(0,0,0)";
          this.navsBackground = "rgba(255,255,255,1)";
          this.indexCateItemOpacity = 1;
        }
      })
    });

    this.categoryItems = [
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("GameRechargePage","游戏充值","assets/images/chongzhi.png"),
    ]
  }

  ionViewDidEnter(){
    
    this.slides.startAutoplay();
  }

  ionViewDidLeave(){
    this.slides.stopAutoplay();
  }

  pushOtherPage(page){
    this.navCtrl.push(page);
  }

}

class CategoryItem {
  constructor(public page:string,public name:string,public img:string){

  }
}
