import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  errors: string[] = [];

  registerInProgress: boolean = false;

  username: string;

  password: string;

  email: string;

  ngOnInit() {
  }

  signUp() {
    const signUpDetails = { 
      username: this.username, 
      password: this.password, 
      email: this.email };

    this.registerInProgress = true;

    this.authService.signUpAndLogin(signUpDetails).
      pipe(finalize(() => this.registerInProgress = false)).
      subscribe(
        res => this.router.navigateByUrl("/"),
        httpError => { 
          const apiErrorObject = httpError.error.errors;
          this.errors = Object.keys(apiErrorObject).flatMap(k => apiErrorObject[k].map(em => `${k} ${em}`)) 
        });
  }
}
