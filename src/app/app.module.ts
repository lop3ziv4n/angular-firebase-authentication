import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {EmailComponent} from './email/email.component';
import {SignupComponent} from './signup/signup.component';

import {AuthenticationService} from './services/authentication.service';

import {MembersComponent} from './members/members.component';
import {AuthenticationGuard} from './services/authenticationguard.service';
import {routes} from './app.routes';

export const firebaseConfig = {
  apiKey: 'AIzaSyAkrt-lvZYT9EhIBFSsua7eUD9FkH-JGuM',
  authDomain: 'angular-firebase-authenticate.firebaseapp.com',
  databaseURL: 'https://angular-firebase-authenticate.firebaseio.com',
  storageBucket: 'angular-firebase-authenticate.appspot.com',
  messagingSenderId: '140570178050'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes
  ],
  providers: [AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
