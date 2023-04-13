import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag:boolean = true;
  modelImg:string = ''
  srcs:string[] =[
    'assets/image/cabin1.png',
    'assets/image/cake2.png',
    'assets/image/circus3.png',
    'assets/image/game4.png',
    'assets/image/safe5.png',
    'assets/image/submarine6.png',
  ]
  hideModel(element:EventTarget | null,img:HTMLImageElement) :void{ 
    if(element == img) return;
    this.flag =true;
  }
}
