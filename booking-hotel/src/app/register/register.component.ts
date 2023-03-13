import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/service/register/register.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
errors: any[]= []

registerUserData = {
  firstname : '',
  lastname : '',
  email : '',
  password : '',
  password_confirmation : ''
};

constructor(private toastr: ToastrService,private route: ActivatedRoute,private _register: RegisterService,private router:Router){}
ngOnInit(){
if(this.registerUserData.password!==this.registerUserData.password_confirmation){
('password confirmation')
}

}

showToaster(msg: string){
  // this.toastr.success(msg) 
  this.toastr.success('Hello world!', 'Toastr fun!');
}



registerUser(){

this.errors=[];
  console.log(this.registerUserData)
  this._register.registerUser(this.registerUserData)
  .subscribe(
    () => {
      console.log("User is register in");
      this.router.navigateByUrl('/Login');
    },
(err)=>{
console.log(err.error.error);
for (const [key, value] of Object.entries(err.error.error)) {
  this.errors.push(value);

}

}

  )

}
}
