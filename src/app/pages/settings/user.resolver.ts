import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { User } from 'models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<Observable<User>> {

  constructor(private apiService: ApiService) { }

  resolve(): Observable<User> {
    return this.apiService.getCurrentUser();
  }
}