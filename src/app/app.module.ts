import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './example/user.component';

import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from './print/print.component';
import { Routes, RouterModule } from '@angular/router';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, 
  RouterModule.forRoot(
      [
        { path: "user", component: UserComponent },
        { path: "print", component: PrintComponent }
      ]
    )],
  declarations: [ AppComponent, HelloComponent , UserComponent, PrintComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ AppService ]
})
export class AppModule { }
