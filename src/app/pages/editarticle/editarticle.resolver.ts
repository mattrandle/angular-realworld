import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'services/api.service';
import { Article } from 'models/article.model';

@Injectable({
  providedIn: 'root'
})
export class EditArticleResolver implements Resolve<Observable<Article>> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article> {
    const articleSlug = route.paramMap.get('slug');
    return this.apiService.getArticle(articleSlug);
  }               
}