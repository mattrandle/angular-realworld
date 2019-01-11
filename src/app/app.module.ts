import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from 'pages/home/home.component';
import { LoginComponent } from 'pages/login/login.component';
import { ProfileComponent } from 'pages/profile/profile.component';
import { RegisterComponent } from 'pages/register/register.component';
import { SettingsComponent } from 'pages/settings/settings.component';
import { ArticleComponent } from 'pages/article/article.component';
import { EditArticleComponent } from 'pages/editarticle/editarticle.component';
import { ArticleListComponent } from 'components/article-list/article-list.component';
import { ArticleMetaComponent } from 'components/article-meta/article-meta.component';
import { ArticlePreviewComponent } from 'components/article-preview/article-preview.component';
import { HomeTagComponent } from 'pages/home/home-tag/home-tag.component';
import { HomeGlobalFeedComponent } from 'pages/home/home-global-feed/home-global-feed.component';
import { HomeMyFeedComponent } from 'pages/home/home-my-feed/home-my-feed.component';
import { ProfileFavoritedComponent } from 'pages/profile/profile-favorited/profile-favorited.component';
import { ProfileMyArticlesComponent } from 'pages/profile/profile-my-articles/profile-my-articles.component';
import { ShowIfAuthenticatedDirective } from 'directives/show-if-authenticated.directive';

import { ArticleResolver } from 'pages/article/article.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SettingsComponent,
    ArticleComponent,
    EditArticleComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
    HomeTagComponent,
    HomeGlobalFeedComponent,
    HomeMyFeedComponent,
    ProfileFavoritedComponent,
    ProfileMyArticlesComponent,
    ShowIfAuthenticatedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticleResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
