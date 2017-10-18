import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
})
export class EmailComponent implements OnInit {

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

  signIn() {
    this.authorizationService.signIn({email: this.email, password: this.password})
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
