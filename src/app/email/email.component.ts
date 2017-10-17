import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {fallIn, moveIn} from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {

  error: any;
  state: '';

  constructor(private authorizationService: AuthenticationService, private router: Router) {
    this.authorizationService.state(auth => {
      if (auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData.value);

      this.authorizationService.emailLogin(formData.value.email,
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
