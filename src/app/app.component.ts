import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  vh100:object= {};

  @ViewChild(NavbarComponent) childNav!:NavbarComponent;
 

  ngAfterViewInit(): void {
    this.vh100 = {
      marginTop:`${this.childNav.nav.nativeElement.clientHeight}px`,
      minHeight :`calc(100vh - ${this.childNav.nav.nativeElement.clientHeight}px)`
    }
    
  }

}
