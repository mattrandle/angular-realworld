import { Component, OnInit } from '@angular/core';
import { ApiService } from 'services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'models/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html'
})
export class EditArticleComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  tagList: string;
  article: Article;
  errors: string[] = []; 

  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      this.article = { tagList: [] } as Article;

      if (routeData.articleData) {
        this.article = routeData.articleData.article;
      }
    });
  }

  saveChanges() {
    const saveObservable: Observable<Article> = this.article.slug ? 
      this.apiService.updateArticle(this.article) : 
      this.apiService.createArticle(this.article);

    saveObservable.subscribe(
        article => this.router.navigate(['/articles', article.slug]),
        errorResponse => { 
          const errors = errorResponse.error.errors;
          this.errors = Object.keys(errors).flatMap(k => errors[k].map(em => `${k} ${em}`))
        }
    );
  }
}
