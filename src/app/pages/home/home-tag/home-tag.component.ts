import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-tag',
  templateUrl: './home-tag.component.html'
})
export class HomeTagComponent implements OnInit {

  private sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  tag: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.tag = params.tag);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
