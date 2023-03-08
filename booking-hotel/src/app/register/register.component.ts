import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../service/register/register.service';

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

constructor(private _register: RegisterService){}
ngOnInit(){
}

registerUser(){
  console.log('onsubmit')

  console.log(this.registerUserData)
  this._register.registerUser(this.registerUserData)
  .subscribe(
    res => console.log(res),
    err => console.log(err)
  )

}
}
