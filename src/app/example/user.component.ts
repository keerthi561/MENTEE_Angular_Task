import { Component } from '@angular/core'; 
import {HttpClient} from '@angular/common/http';
@Component({ 
  selector: 'app-user', 
  templateUrl: './user.component.html'
})


export class UserComponent { 
  
  records:any; 

  constructor(private http : HttpClient){ }
  ngOnInit(): void {
    this.http.get('https://api.github.com/users') 
    .subscribe(Response => { 
      console.log(Response) 
      this.records=Response;
    }); 
  }

} // Export the class to use it outside of this file