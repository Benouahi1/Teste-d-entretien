import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
token: any = '';
  private _loginURL : string = "https://test-api.scdev.digital/api/login";
  constructor(private http: HttpClient) {}
 loginUser(user : any){
    return this.http.post<any>(this._loginURL, user)
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  };
  IsLogin(){
    return localStorage.getItem('token')!=null 
  }


}
