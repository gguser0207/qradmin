import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomerNumComponent} from './components/customer-num/customer-num.component';
import { BusinessComponent } from './components/business/business.component';
import { BusinessloginComponent } from './components/businesslogin/businesslogin.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'Customer_Num', component: CustomerNumComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'businesslogin', component: BusinessloginComponent },
  { path: 'Customer_list', component: CustomerListComponent},
  //{ path: 'Slider', component: SliderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
