import { Component, AfterViewInit } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  async ngAfterViewInit() {
		await this.loadScript('../assets/site/js/vendor/jquery-1.12.0.min.js');
		await this.loadScript('../assets/site/js/bootstrap.min.js');
		await this.loadScript('../assets/site/js/plugins.js');
		await this.loadScript('../assets/site/js/form.js');
		await this.loadScript('../assets/site/js/main.js');
	}
   
	 private loadScript(scriptUrl: string) {
	   return new Promise((resolve, reject) => {
		 const scriptElement = document.createElement('script');
		 scriptElement.src = scriptUrl;
		 scriptElement.onload = resolve;
		 document.body.appendChild(scriptElement);
		})
	 }
  title = 'app';
}
