import {OnInit , Component} from '@angular/core';
import { RoomService } from 'service/listroom/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  ROOMS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [3, 6, 9, 12];
  constructor(private RoomService: RoomService) {}
  ngOnInit(): void {
    this.fetchRooms();
  }
  fetchRooms(): void {
    this.RoomService.getAllPosts()
    .subscribe((response) => {
        this.ROOMS = response.data;
        console.log( response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchRooms();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchRooms();
  }
}


