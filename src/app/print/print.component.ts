import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AppService } from '../app.service';
@Component({ 
  selector: 'app-print', 
  templateUrl: './print.component.html'
})


export class PrintComponent { 
  url:string;
  records:any; 

  constructor(private http : HttpClient, private router: Router, private appService: AppService) { 
  }
  ngOnInit(): void {
    this.url = this.appService.getUrl();
    this.http.get(this.url) .subscribe(Response => { 
      console.log(Response) 
      this.records=Response;
    }); 
  }

} // Export the class to use it outside of this file