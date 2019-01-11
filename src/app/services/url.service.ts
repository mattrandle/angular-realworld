import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  
  // TODO - inject this
  private baseUrl = 'https://conduit.productionready.io';

  constructor() { }

  getFeedArticlesUrl(): any {
    return `${this.baseUrl}/api/articles/feed`;
  }

  getCurrentUserUrl(): string {
    return `${this.baseUrl}/api/user`;
  }

  getArticlesUrl(): string {
    return `${this.baseUrl}/api/articles`;
  }

  getArticleUrl(articleSlug: string): string {
    return `${this.baseUrl}/api/articles/${articleSlug}`;
  }

  getPopularTagsUrl(): string {
    return `${this.baseUrl}/api/tags`;
  }

  getLoginUrl(): string {
    return `${this.baseUrl}/api/users/login`;
  }

  getUsersUrl(): string {
    return `${this.baseUrl}/api/users`;
  }

  getProfileUrl(username: string): string {
    return `${this.baseUrl}/api/profiles/${username}`;
  }

  getFollowUrl(username: string): string {
    return `${this.getProfileUrl(username)}/follow`;
  }

  getFavoriteUrl(articleSlug: string): string {
    return `${this.getArticleUrl(articleSlug)}/favorite`;
  }

  getCommentsUrl(articleSlug: string): string {
    return `${this.getArticleUrl(articleSlug)}/comments`;
  }

  getCommentUrl(articleSlug: string, commentId: number) {
    return `${this.getCommentsUrl(articleSlug)}/${commentId}`;
  }
}
