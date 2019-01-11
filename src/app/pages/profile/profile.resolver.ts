import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { Profile } from 'models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<Observable<Profile>> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Profile> {
    const username = route.paramMap.get('username');
    return this.apiService.getProfile(username);
  }
}