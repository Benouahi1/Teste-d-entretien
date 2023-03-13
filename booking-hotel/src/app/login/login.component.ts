import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tok :any = localStorage.getItem('token')


  error : any = '';
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
      (res) => {

        // console.log(res);

        this._login.token = res.token;
        if(res.token){
          localStorage.setItem('token',res.token)
          console.log(localStorage.getItem('token'))
  
          this.router.navigateByUrl('/Room');
        }
        
      },
      (err)=>{
        console.log(err)
        this.error="Erour Email is password";
        
      }


    )

}


}
