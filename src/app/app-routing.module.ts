import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'pages/home/home.component'
import { HomeGlobalFeedComponent } from 'pages/home/home-global-feed/home-global-feed.component';
import { HomeMyFeedComponent } from 'pages/home/home-my-feed/home-my-feed.component';
import { HomeTagComponent } from 'pages/home/home-tag/home-tag.component';
import { ArticleComponent } from 'pages/article/article.component'
import { EditArticleComponent } from 'pages/editarticle/editarticle.component'
import { SettingsComponent } from 'pages/settings/settings.component'
import { LoginComponent } from 'pages/login/login.component'
import { RegisterComponent } from 'pages/register/register.component'
import { ProfileComponent } from 'pages/profile/profile.component'
import { ProfileFavoritedComponent } from 'pages/profile/profile-favorited/profile-favorited.component'
import { ProfileMyArticlesComponent } from 'pages/profile/profile-my-articles/profile-my-articles.component'

import { ArticleResolver } from 'pages/article/article.resolver';
import { ProfileResolver } from 'pages/profile/profile.resolver';
import { EditArticleResolver } from 'pages/editarticle/editarticle.resolver';
import { UserResolver } from 'pages/settings/user.resolver';

import { IsAuthenticatedGuard } from 'services/is-authenticated-guard.service';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { 
        path: '', 
        component: HomeGlobalFeedComponent 
      },
      { 
        path: 'my-feed', 
        component: HomeMyFeedComponent, 
        canActivate: [ IsAuthenticatedGuard ] 
      },
      { 
        path: 'tag/:tag', 
        component: HomeTagComponent 
      }
    ] 
  },
  { 
    path: 'articles/:articleSlug', 
    component: ArticleComponent, 
    resolve: { articleData: ArticleResolver } 
  }, 
  { 
    path: 'editor/:slug', 
    component: EditArticleComponent, 
    canActivate: [ IsAuthenticatedGuard ], 
    resolve: { articleData: EditArticleResolver } 
  },
  { 
    path: 'editor', 
    component: EditArticleComponent,
    canActivate: [ IsAuthenticatedGuard ] 
  },
  { 
    path: 'settings', 
    component: SettingsComponent, 
    canActivate: [ IsAuthenticatedGuard ], 
    resolve: { user: UserResolver } 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'profile/:username', 
    component: ProfileComponent, 
    resolve: { profile: ProfileResolver },
    children: [
      { 
        path: '', 
        component: ProfileMyArticlesComponent, 
        pathMatch: 'full' 
      },
      { 
        path: 'favorites', 
        component: ProfileFavoritedComponent 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
