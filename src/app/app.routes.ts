import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

export const routes: Routes = [ {
    path: '',
    component: LoginPageComponent
  },

  {
    path: 'signUp',
    component: SignUpComponent
  },
   {
    path: 'patient/dashboard',
    component: PatientDashboardComponent
  }
  ,];
