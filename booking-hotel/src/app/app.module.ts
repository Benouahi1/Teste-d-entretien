import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/Nav/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterService } from 'src/service/register/register.service';
import { RoomComponent } from './room/room.component';
import { ErourComponent } from './erour/erour.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetallesRoomComponent } from './detalles-room/detalles-room.component';
import { LoginService } from 'src/service/login/login.service';
import { ReservationComponent } from './reservation/reservation.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenAccessInterceptor } from './interceptors/token.interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    RoomComponent,
    ErourComponent,
    DetallesRoomComponent,
    ReservationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   NgxPaginationModule,
	BrowserAnimationsModule,
	ToastrModule.forRoot()

  ],
  providers: [RegisterService,LoginService,
    {
      provide: HTTP_INTERCEPTORS,
    useClass: TokenAccessInterceptor,
    multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
