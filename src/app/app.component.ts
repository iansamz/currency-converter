import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  screenWidth : number;

  constructor(
    public router : Router
  ) {
    this.screenWidth = window.innerWidth
    window.onresize = () =>{
      this.screenWidth = window.innerWidth;
    }
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;
  
  ngOnInit() {
    this.sidenav.close();
    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: 840px)`).matches;
  }
}
