import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-my-articles',
  templateUrl: './profile-my-articles.component.html'
})
export class ProfileMyArticlesComponent implements OnInit, OnDestroy {

  username: string;
  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
