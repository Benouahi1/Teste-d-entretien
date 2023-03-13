import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient, private login:LoginService) {}
  reserve(data : any) {
   return this.http.post<any>("https://test-api.scdev.digital/api/reservation/create", data)
  }
}
