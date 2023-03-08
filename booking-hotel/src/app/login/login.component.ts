import { Component, OnInit } from '@angular/core';
import { LoginService } from 'service/login/login.service';
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

  constructor(private _login: LoginService){}
  ngOnInit(){
  }


  LoginUser(){
    console.log('onsubmit')

    console.log(this.LoginUserData)
    this._login.loginUser(this.LoginUser)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )

  }
}
