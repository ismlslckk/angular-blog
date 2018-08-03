import { Injectable,Inject } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Resume} from './resume'

@Injectable({
  providedIn: 'root'
}) 
export class ResumeService {

  constructor(private http:Http,@Inject("apiUrl")  private apiUrl) { }

  url:string;
  getResume():Observable<Resume[]>{
    return this.http.get(this.url).map(response=>response.json());
  }
} 
