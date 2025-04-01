import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { BreakpointObserver } from "@angular/cdk/layout";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shop-cart';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;
  isLoginPage: boolean = true;
  loading: boolean = true;


  constructor(private observer: BreakpointObserver, private router: Router) {
  }

  ngOnInit() {

    console.log("This is a login page: {}",this.isLoginPage)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = (event.url === '/login' || event.url === '/');
        console.log("This is the url: {}",event.url)
        console.log("This is a login page in sub: {}",this.isLoginPage)
        this.loading = false; // Set loading to false once the router event is complete
      }
    });

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
