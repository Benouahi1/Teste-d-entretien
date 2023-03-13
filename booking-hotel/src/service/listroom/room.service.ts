import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const endpoint = 'https://test-api.scdev.digital/api/rooms';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient,) {}
  getAllRoom(): Observable<any> {
    return this.http.get(endpoint);
  }



}
