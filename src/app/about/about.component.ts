import { Component, OnInit } from '@angular/core';
import { About } from './about'
import {AboutService} from './about.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers:[AboutService]
})
export class AboutComponent implements OnInit {

  //obj: About = JSON.parse('{ "title": "value1", "content": "value2", "skills": [{ "aa": 12 }, { "bbb": 13 }] }');
  aboutPageData:About;
  constructor(private aboutService:AboutService) { }

  ngOnInit() {
    //this.getAbout();
  }
  getAbout(){
    this.aboutService.getAbout().subscribe(
      p => {
        this.aboutPageData = p 
    });;
  }

}
