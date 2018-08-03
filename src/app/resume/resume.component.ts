import { Component, OnInit } from '@angular/core';
import {Resume} from './resume'
import {ResumeService} from './resume.service'


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers:[ResumeService]
})
export class ResumeComponent implements OnInit {

  constructor(private resumeService:ResumeService) { }

  resumePageData:Resume[];
  ngOnInit() {
    //this.getResume();
  }

  getResume(){
    this.resumeService.getResume().subscribe(c=>this.resumePageData=c);

  }

}
