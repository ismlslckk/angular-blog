import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service'
import {Home} from './home'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  homePageData:Home;
  ngOnInit() {
    //this.getHome();
  }

  getHome(){
    this.homeService.getHome().subscribe(
      p => {
        this.homePageData = p 
    });;
  }

}
