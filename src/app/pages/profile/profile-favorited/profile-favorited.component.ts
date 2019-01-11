import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-favorited',
  templateUrl: './profile-favorited.component.html'
})
export class ProfileFavoritedComponent implements OnInit, OnDestroy {

  username: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
