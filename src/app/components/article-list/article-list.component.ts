import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnChanges {

  private pageSize: number = 20;

  constructor(private apiService: ApiService) {
    this.currentPage = 1;
  } 

  articles: Article[];
  articlesCount: number;
  currentPage: number;
  isLoading: boolean;

  @Input()
  author: string;

  @Input()
  tag: string;

  @Input()
  favoritedBy: string;

  @Input()
  myFeed: boolean;
  
  ngOnChanges(changes: SimpleChanges) {
    this.getArticles();
  }

  getArticles(): void {
    const offset = (this.currentPage - 1) * this.pageSize;
    
    const params = {
      limit: this.pageSize, 
      offset, 
      author: this.author,
      favoritedBy: this.favoritedBy,
      tag: this.tag
    }

    const articleFeed: Observable<any> = this.myFeed ? 
        this.apiService.getFeedArticles(params.limit, params.offset) :
        this.apiService.getArticles(params);  

    this.isLoading = true;

    articleFeed.
      pipe(finalize(() => this.isLoading = false)).
      subscribe(res => {
        this.articles = res.articles;
        this.articlesCount = res.articlesCount;
      });
  }

  pageCount(): number {
    return Math.ceil(this.articlesCount / this.pageSize);  
  }

  goNextPage(): void {
    if (!this.hasNextPage()) {
      return;
    }

    this.currentPage = this.currentPage + 1;
    this.getArticles();
  }

  goPreviousPage(): void {
    if (!this.hasPreviousPage()) {
      return;
    }

    this.currentPage = this.currentPage - 1;
    this.getArticles();
  }

  hasNextPage(): boolean {
    return this.currentPage < this.pageSize;
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }
}
