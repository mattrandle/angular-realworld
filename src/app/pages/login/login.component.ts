import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  email: string;
  password: string;
  errors: string[] = [];
  redirectUrl: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.redirectUrl = params['return']);
  } 

  signIn() {
    this.authService.logIn(this.email, this.password).subscribe(
      data => this.router.navigateByUrl(this.redirectUrl || '/'),
      httpError => { 
        const apiErrorObject = httpError.error.errors;
        this.errors = Object.keys(apiErrorObject).flatMap(k => apiErrorObject[k].map(em => `${k} ${em}`)) 
      }
    );
  }
}
