import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ContectusComponent}from './contectus/contectus.component';
import {HomePageComponent} from './home-page/home-page.component';
import{TrainComponent} from './admin/train/train.component';
import {SearchTrainComponent} from './search-train/search-train.component';
import { ShowtrainComponent} from './showtrain/showtrain.component';
import{ RegisterComponent } from './admin/register/register.component';
import {AdminregisterComponent} from './adminregister/adminregister.component';
import { BookingDetailsComponent} from './admin/booking-details/booking-details.component';
import {AdminNavComponent} from './admin/admin-nav/admin-nav.component';
import { AppComponent}from './app.component';
import {NavComponent} from './nav/nav.component';
import { UserdetailsComponent} from './userdetails/userdetails.component'





const routes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-registerration', component: RegistrationComponent },
  { path: 'app-aboutus', component: AboutusComponent },
  { path: 'app-contectus', component: ContectusComponent },
  { path: 'app-HomePageComponent', component: HomePageComponent },
  { path: 'app-train',component:TrainComponent},
  { path: 'app-searchtrain',component:SearchTrainComponent },
  { path: 'app-showtrain',component:ShowtrainComponent },
  { path: 'app-register', component: RegisterComponent },
  { path: 'app-adminregister', component: AdminregisterComponent},
  { path: 'app-bookingdetail', component:BookingDetailsComponent},
  { path: 'app-adminnav', component:AdminNavComponent},
  { path: 'app-appcomponent', component:AppComponent},
  { path: 'app-nav', component:NavComponent},
  { path: 'app-userdetail', component:UserdetailsComponent}


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
