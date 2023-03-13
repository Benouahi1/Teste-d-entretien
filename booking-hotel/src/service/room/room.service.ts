import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const url = 'https://test-api.scdev.digital/api/room/';
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient) {}
  getRoom(id:any): Observable<any> {
    return this.http.get(url+id);
  }
}
