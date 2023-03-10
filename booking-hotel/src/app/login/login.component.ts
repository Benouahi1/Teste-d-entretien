import { Component, OnInit } from '@angular/core';
import { LoginService } from 'service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginUserData = {
    email : '',
    password : ''
  };

  constructor(private _login: LoginService, private router: Router){}
  ngOnInit(){
  }


  LoginUser(){
    this._login.loginUser(this.LoginUserData)
    .subscribe(
      () => {
        console.log("User is logged in");
        this.router.navigateByUrl('/Room');
      }


    )

  }
}
