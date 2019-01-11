import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { Article } from 'models/article.model';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html'
})
export class ArticlePreviewComponent {

  constructor(private apiService: ApiService) { }

  @Input() 
  article: Article;

  toggleFavoritedArticle() {    
    let observable: Observable<Article> = this.article.favorited ? 
      this.apiService.unfavoriteArticle(this.article.slug) : 
      this.apiService.favoriteArticle(this.article.slug);

    observable.subscribe(article => this.article = article);
  }

  favoriteClass() {
    return {
      'btn-primary': this.article.favorited,
      'btn-outline-primary': !this.article.favorited
    };
  }
}
