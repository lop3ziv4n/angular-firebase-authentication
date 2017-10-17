import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {moveIn} from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(private authorizationService: AuthenticationService, private router: Router) {

    this.authorizationService.state(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  loginFacebook() {
    this.authorizationService.facebook()
      .then((data) => {
        console.log(data);
        this.router.navigate(['/members']);
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }

  loginGoogle() {
    this.authorizationService.google()
      .then((data) => {
        console.log(data);
        this.router.navigate(['/members']);
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }

  ngOnInit() {
  }
}
