import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Content, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content:Content

  @ViewChild(Slides) slides:Slides

  @ViewChild("indexCate") indexCate;

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
        if(top>30){
          top = top-30;
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
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
      new CategoryItem("gameRecharge","游戏充值","assets/images/chongzhi.png"),
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

  toZhangDan(){
    this.navCtrl.push("zhangDan");
  }

  //固定导航栏的位置
  topPosition(event){
    if(event){
      let oTop = this.indexCate.nativeElement.scrollHeight + this.indexCate.nativeElement.style.height;
      console.log(oTop)
      let top = event.scrollTop || 0;
      if(top<=30 && top!=0){
        this.content.scrollToTop();
      }else if(top>30 && top<=oTop){
        this.content.scrollTo(0,oTop);
      }
    }else{
      return null;
    }
    
  }

}

class CategoryItem {
  constructor(public page:string,public name:string,public img:string){

  }
}
