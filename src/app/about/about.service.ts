import { Injectable, Inject } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { About } from './about'

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: Http, @Inject("apiUrl") private apiUrl) {
  }
  url: string;
  getAbout(): Observable<About> {
    return this.http.get(this.url).map(response => response.json());
  }

}
