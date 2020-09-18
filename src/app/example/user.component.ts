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
  url = 'https://api.github.com/users';
  records:any; 

  constructor(private http : HttpClient, private router: Router, private appService: AppService){ }
  ngOnInit(): void {
    this.http.get(this.url) 
    .subscribe(Response => { 
      console.log(Response) 
      this.records=Response;
    }); 
  }
  
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false

    // this.router.navigate(['print'], { state: { example: this.url }});
    this.appService.run();
    this.appService.setUrl(this.url);
    this.router.navigate(['/print']);
  }

} // Export the class to use it outside of this file