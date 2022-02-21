import { Component } from '@angular/core';
import {Routes} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webdziekanat';
  login: boolean = false;
  logInOrOut: string = 'Log-in';


  LoggedIn(): void{
    if(this.login == true) {
      this.login = false;
      this.logInOrOut = 'Log-in';
    }
    else
      if(this.login == false) {
        this.login = true;
        this.logInOrOut = 'Log-out';
      }
  }
}

