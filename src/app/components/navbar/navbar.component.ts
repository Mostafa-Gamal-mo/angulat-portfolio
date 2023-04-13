import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit {
  
  @ViewChild('navRef')
  nav !: ElementRef;
  constructor(){
  
  }
  ngAfterViewInit(): void {
    
  }
ngOnInit(): void {
  
}

animation(navbar :HTMLElement):void{

  

 window.scrollY > 30 ? navbar.classList.remove('py-4') : navbar.classList.add('py-4')
}



}
