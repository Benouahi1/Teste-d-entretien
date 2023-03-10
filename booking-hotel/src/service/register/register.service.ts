import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private _registerURL : string = "https://test-api.scdev.digital/api/register";
  constructor(private http: HttpClient) {}

  registerUser(user : any){
    return this.http.post<any>(this._registerURL, user)
  }
}
