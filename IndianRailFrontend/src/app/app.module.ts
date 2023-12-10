import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './admin/register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContectusComponent } from './contectus/contectus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { TrainComponent } from '../app/admin/train/train.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { NavComponent } from './nav/nav.component';
import { ShowtrainComponent } from './showtrain/showtrain.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { BookingDetailsComponent } from '../app/admin/booking-details/booking-details.component';
import { AdminNavComponent } from '../app/admin/admin-nav/admin-nav.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FormDataService } from './form-data.service';




@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
   
    LoginComponent,
    HomePageComponent,
    FooterComponent,
    ContectusComponent,
    AboutusComponent,
    RegistrationComponent,
    TrainComponent,
    SearchTrainComponent,
    NavComponent,
    ShowtrainComponent,
    AdminregisterComponent,
    BookingDetailsComponent,
    AdminNavComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [FormBuilder, HttpClient,MatSnackBar,FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
