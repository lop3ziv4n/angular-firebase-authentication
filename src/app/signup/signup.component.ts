import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  error: any;
  email: string;
  password: string;

  constructor(private authorizationService: AuthenticationService, private router: Router) {
    this.authorizationService.authState((auth) => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  signUp() {
    this.authorizationService.signUp({email: this.email, password: this.password})
      .then((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }

  ngOnInit() {
  }
}
