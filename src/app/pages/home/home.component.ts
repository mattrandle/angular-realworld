import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';
import { ApiService } from 'services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private router: Router) {}

  tags: string[]

  selectedTag: string;

  ngOnInit() {
    this.apiService.getPopularTags().subscribe(
      tags => this.tags = tags  
    );
  }

  setSelectedTag(tagName: string) {
    this.selectedTag = tagName;
    this.router.navigate(['tag', this.selectedTag]);  
  }
}
