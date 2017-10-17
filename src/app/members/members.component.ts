import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {fallIn, moveIn, moveInLeft} from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {

  name: any;
  state: '';

  constructor(private authorizationService: AuthenticationService, private router: Router) {

    this.authorizationService.state(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  logout() {
    this.authorizationService.logout()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }
}
