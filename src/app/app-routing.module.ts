import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicComponent } from './clinic/clinic.component';
import { ListClinicsComponent } from './list-clinics/list-clinics.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},

  { path: 'clinics', component: ListClinicsComponent},
  
  /*{ path: '', component: LoginComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
 
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: '**', component: ErrorComponent }
*/
  { path: 'clinic/:id', component: ClinicComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
