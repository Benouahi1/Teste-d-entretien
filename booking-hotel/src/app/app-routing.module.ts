import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomComponent } from './room/room.component'
import { ErourComponent } from './erour/erour.component';
import { DetallesRoomComponent } from './detalles-room/detalles-room.component';
import { AuthGuard } from 'src/service/aut/shared/auth.guard';
import { AutGuard } from 'src/service/aut/New folder/aut.guard';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path:'Login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
  {path:'Room', component: RoomComponent,canActivate:[AuthGuard] },
  {path: 'Detalles/:id', component: DetallesRoomComponent,canActivate:[AuthGuard]},
  {path: 'Reserver/:id', component: ReservationComponent,canActivate:[AuthGuard]},
  {path:'**', component: ErourComponent},
  {path:'', component: ErourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
