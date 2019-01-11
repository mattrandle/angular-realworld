import { Injectable } from '@angular/core'
import { HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HttpService } from './http.service'
import { UrlService } from './url.service'
import { TokenService } from './token.service'
import { User } from 'models/user.model'
import { Article } from 'models/article.model';
import { map } from 'rxjs/operators';
import { Articles } from 'models/articles.model';
import { ArticleComment } from 'models/article-comment.model';
import { Profile } from 'models/profile.model';
 
@Injectable({
  providedIn: 'root'
}) 
export class ApiService {
  
  constructor(
    private http: HttpService, 
    private urls: UrlService,
    private tokenService: TokenService) { }

  getArticles(parameters: { limit: number, offset: number, author?: string, favoritedBy?: string, tag?: string }): Observable<any> {
    const url = this.urls.getArticlesUrl();
    
    const params = {
      limit: parameters.limit.toString(),
      offset: parameters.offset.toString(),
      author: parameters.author,
      favorited: parameters.favoritedBy,
      tag: parameters.tag
    };

    Object.keys(params).forEach(key => !params[key] && delete params[key])

    return this.http.get(url, new HttpParams( { fromObject: params }), this.tokenService.getToken());
  }

  getFeedArticles(limit: number, offset: number): Observable<Articles> {
    const url = this.urls.getFeedArticlesUrl();
    const params = { fromObject: { limit: limit.toString(), offset: offset.toString() } };
    return this.http.get(url, new HttpParams(params), this.tokenService.getToken());
  }

  login(data: any): Observable<User> {
    const url = this.urls.getLoginUrl();
    return this.http.post(url, data).
      pipe(map(response => response.user));
  }

  getArticle(articleSlug: string): Observable<Article> {
    const url = this.urls.getArticleUrl(articleSlug);
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response.article));
  }

  getPopularTags(): Observable<string[]> {
    const url = this.urls.getPopularTagsUrl();
    return this.http.get(url).
      pipe(map(response => response.tags));
  }

  signUp(user: any): Observable<User> {
    const url = this.urls.getUsersUrl();
    return this.http.post(url, user).
      pipe(map(response => response.user));
  }

  updateArticle(article: Article): Observable<Article> {
    const url = this.urls.getArticleUrl(article.slug);
    return this.http.put(url, { article }, this.tokenService.getToken()).
      pipe(map(response => response.article));
  }

  createArticle(article: Article): Observable<Article> {
    const url = this.urls.getArticlesUrl();
    return this.http.post(url, { article }, this.tokenService.getToken()).
      pipe(map(response => response.article));
  }

  deleteArticle(articleSlug: string): Observable<any> {
    const url = this.urls.getArticleUrl(articleSlug);
    return this.http.delete(url, this.tokenService.getToken());
  }

  getCurrentUser(): Observable<User> {
    const url = this.urls.getCurrentUserUrl();
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response.user));
  }

  updateUser(user: User): Observable<User> {
    const url = this.urls.getCurrentUserUrl();
    return this.http.put(url, { user }, this.tokenService.getToken()).
      pipe(map(response => response.user));
  }

  getProfile(username: string): Observable<Profile> {
    const url = this.urls.getProfileUrl(username);
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response.profile));
  }

  follow(username: string): Observable<Profile> {
    const url = this.urls.getFollowUrl(username);
    return this.http.post(url, null, this.tokenService.getToken()).
      pipe(map(response => response.profile));
  }

  unfollow(username: string): Observable<Profile> {
    const url = this.urls.getFollowUrl(username);
    return this.http.delete(url, this.tokenService.getToken()).
    pipe(map(response => response.profile));
  }

  favoriteArticle(articleSlug: string): Observable<Article> {
    const url = this.urls.getFavoriteUrl(articleSlug);
    return this.http.post(url, null, this.tokenService.getToken()).
      pipe(map(response => response.article));
  }

  unfavoriteArticle(articleSlug: string): Observable<Article> {
    const url = this.urls.getFavoriteUrl(articleSlug);
    return this.http.delete(url, this.tokenService.getToken()).
      pipe(map(response => response.article));
  }

  getComments(articleSlug: string): Observable<ArticleComment[]> {
    const url = this.urls.getCommentsUrl(articleSlug);
    return this.http.get(url, null, this.tokenService.getToken()).
      pipe(map(response => response.comments));
  }

  postComment(articleSlug: string, commentBody: string): Observable<ArticleComment> {
    const url = this.urls.getCommentsUrl(articleSlug);
    return this.http.post(url, { comment: { body: commentBody } }, this.tokenService.getToken());
  }

  deleteComment(articleSlug: string, commentId: number): Observable<any> {
    const url = this.urls.getCommentUrl(articleSlug, commentId);
    return this.http.delete(url, this.tokenService.getToken());
  }
}
