import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/service/room/room.service';

@Component({
  selector: 'app-detalles-room',
  templateUrl: './detalles-room.component.html',
  styleUrls: ['./detalles-room.component.css']
})
export class DetallesRoomComponent implements OnInit {

  ROOM: any =  {};
  options: Array<String> = [];

  constructor(private route:ActivatedRoute,private RoomService: RoomService){}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetchRoom(id);
  }
  fetchRoom(id:any): void {
    this.RoomService.getRoom(id)
    .subscribe((response) => {
        this.ROOM = response.data;
        this.options = Object.values(response.data.options);
        console.log(this.ROOM);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
