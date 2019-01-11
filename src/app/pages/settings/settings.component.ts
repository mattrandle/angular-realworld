import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'services/auth.service';
import { ApiService } from 'services/api.service';
import { User } from 'models/user.model';

@Component({
  selector: 'app-settings',  
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router) { }
 
  user: User;
  errors: string[] = [];

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
  }

  updateUser() {
    this.apiService.updateUser(this.user).subscribe(
      user => {
        this.authService.setAuthenticatedUser(user);
        this.router.navigateByUrl("/")
      },
      httpError => { 
        const apiErrorObject = httpError.error.errors;
        this.errors = Object.keys(apiErrorObject).flatMap(k => apiErrorObject[k].map(em => `${k} ${em}`)) 
      }
    );
  }

  signOut() {
    this.authService.logOut();
    this.router.navigateByUrl("/");
  }
}
