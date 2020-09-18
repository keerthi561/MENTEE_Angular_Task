import { Component } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
// import { AppService } from './app.service';
@Component({ 
  selector: 'app-user', 
  templateUrl: './user.component.html'
})


export class UserComponent { 
  url:string;
  records:any; 

  constructor(private http : HttpClient, private router: Router, private appService: AppService){ }
  ngOnInit() { }
  
  onSubmit(f: NgForm) {
    this.url = f.value.url;
    console.log(this.url)
    this.appService.setUrl(this.url);
    this.router.navigate(['/print']);

  }

} // Export the class to use it outside of this file