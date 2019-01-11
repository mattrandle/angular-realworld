import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from 'services/api.service';
import { AuthService } from 'services/auth.service';
import { Article } from 'models/article.model';
import { ArticleComment } from 'models/article-comment.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router) { }

  article: Article;
  articleComments: ArticleComment[];
  commentBody: string;

  ngOnInit() {
    const articleData = this.route.snapshot.data.articleData;
    this.article = articleData.article;
    this.articleComments = articleData.articleComments;
  }

  postComment() {
    this.apiService.postComment(this.article.slug, this.commentBody).
      subscribe(comment => { 
        this.articleComments.unshift(comment);
        this.commentBody = null;
      });
  }

  deleteComment(commentId: number) {
    this.apiService.deleteComment(this.article.slug, commentId).
      subscribe(res => {
        const index = this.articleComments.findIndex(comment => comment.id == commentId);
        this.articleComments.splice(index, 1);
      });
  }

  isOwnComment(commentAuthorUsername: string) {
    return this.authService.getIsAuthenticated() && this.authService.getAuthenticatedUser().username === commentAuthorUsername;
  }

  isOwnArticle() {
    return this.authService.getIsAuthenticated() && this.article.author.username === this.authService.getAuthenticatedUser().username;
  }

  favoriteClass() {
    return {
      'btn-primary': this.article.favorited,
      'btn-outline-primary': !this.article.favorited
    };
  }

  toggleFollowAuthor() {
    let observable: Observable<any> = this.article.author.following ? 
      this.apiService.unfollow(this.article.author.username) : 
      this.apiService.follow(this.article.author.username);

    observable.subscribe(res => this.article.author.following = !this.article.author.following);
  }

  toggleFavoritedArticle() {    
    let observable: Observable<any> = this.article.favorited ? 
      this.apiService.unfavoriteArticle(this.article.slug) : 
      this.apiService.favoriteArticle(this.article.slug);

    observable.subscribe(res => this.article = res.article);
  }

  deleteArticle() {
    this.apiService.deleteArticle(this.article.slug).
      subscribe(res => this.router.navigateByUrl('/'));
  }

  getButtonIconClass() {
    return {
      "ion-plus-round": !this.article.author.following,
      "ion-minus-round": this.article.author.following
    };
  }
}
