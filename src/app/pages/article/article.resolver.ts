import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from 'services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Observable<any>> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const articleSlug = route.paramMap.get('articleSlug');
    return forkJoin(
      this.apiService.getArticle(articleSlug),
      this.apiService.getComments(articleSlug)
    ).pipe(map(allResponses => {
      return {
        article: allResponses[0],
        articleComments: allResponses[1]
      }
    }));
  }
}
