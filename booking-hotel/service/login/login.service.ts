import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginURL : string = "https://test-api.scdev.digital/api/login";
  constructor(private http: HttpClient) {}
 loginUser(user : any){
    return this.http.post<any>(this._loginURL, user)
  }
}
