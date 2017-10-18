import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {

  email: string;
  name: string;

  constructor(private authorizationService: AuthenticationService, private router: Router) {
    this.authorizationService.authState((auth) => {
      if (!auth) {
        this.router.navigateByUrl('/login');
      } else {
        this.email = auth.email;
        this.name = auth.displayName;
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
