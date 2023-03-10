import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../service/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


registerUserData = {
  firstname : '',
  lastname : '',
  email : '',
  password : '',
  password_confirmation : ''
};

constructor(private _register: RegisterService,private router:Router){}
ngOnInit(){
}

registerUser(){
  console.log('onsubmit')

  console.log(this.registerUserData)
  this._register.registerUser(this.registerUserData)
  .subscribe(
    () => {
      console.log("User is logged in");
      this.router.navigateByUrl('/Login');
    }
  )

}
}
