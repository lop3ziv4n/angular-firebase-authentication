import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MembersComponent} from './members/members.component';
import {AuthenticationGuard} from './services/authenticationguard.service';
import {SignupComponent} from './signup/signup.component';
import {EmailComponent} from './email/email.component';

export const router: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login-email', component: EmailComponent},
  {path: 'members', component: MembersComponent, canActivate: [AuthenticationGuard]}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
