import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {

  error: any;
  state: '';

  constructor(private authorizationService: AuthenticationService, private router: Router) {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authorizationService.emailSign(formData.value.email,
        formData.value.password)
        .then((data) => {
          console.log(data);
          this.router.navigate(['/members']);
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    }
  }

  ngOnInit() {
  }
}
