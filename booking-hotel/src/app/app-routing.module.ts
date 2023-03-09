import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoomComponent } from './room/room.component'
import { ErourComponent } from './erour/erour.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'Login', component: LoginComponent },
  {path:'Register', component: RegisterComponent},
  {path:'Room', component: RoomComponent },
  {path:'*', component: ErourComponent},
  {path:'**', component: ErourComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
