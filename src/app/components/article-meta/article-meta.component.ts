import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Article } from 'models/article.model';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html'
})
export class ArticleMetaComponent {

  constructor(
    private authService: AuthService,
    private apiService: ApiService) { }
  
  @Input() 
  article: Article;
}
