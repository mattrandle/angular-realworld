import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService) { }

  ngOnInit() {
    this.profile = this.route.snapshot.data.profile;
  }

  toggleFollowAuthor() {
    let observable: Observable<any> = this.profile.following ? 
      this.apiService.unfollow(this.profile.username) : 
      this.apiService.follow(this.profile.username);

    observable.subscribe(res => this.profile.following = !this.profile.following);
  }

  isOwnProfile() {
    return this.authService.getIsAuthenticated() && this.authService.getAuthenticatedUser().username === this.profile.username;
  }
}
