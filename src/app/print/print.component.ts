import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({ 
  selector: 'app-print', 
  templateUrl: './print.component.html'
})


export class PrintComponent { 
  url = '';
  records:any; 

  constructor(private http : HttpClient, private router: Router){ 
    this.url = this.router.getCurrentNavigation().extras.state.example;
    this.url = 'https://api.github.com/users?since=17&page=100&per_page=10'
  }
  ngOnInit(): void {
    this.http.get(this.url) 
    .subscribe(Response => { 
      console.log(Response) 
      this.records=Response;
    }); 
  }

} // Export the class to use it outside of this file