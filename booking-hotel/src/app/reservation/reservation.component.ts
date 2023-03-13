import { Component,OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/service/reserv/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  date = new Date().toISOString().slice(0, 10);


Reserver : any = {
  start_at: '',
  end_at: '',
  room_id: this.route.snapshot.paramMap.get('id'),
}


constructor(private route:ActivatedRoute , private _Reserve: ReservationService, private router: Router){}
ngOnInit(){}



Reserve(){
console.log(this.Reserver)
  this._Reserve.reserve(this.Reserver)
  .subscribe(
    (res) => {
      console.log(res);
      this.router.navigateByUrl('/Room');
    }


  )

}


}
