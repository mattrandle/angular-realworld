import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ArticlePreviewComponent } from './article-preview.component';
import { ArticleMetaComponent } from '../article-meta/article-meta.component';
import { Article } from 'models/article.model';
import { Profile } from 'models/profile.model';

describe('ArticlePreviewComponent', () => {
  let component: ArticlePreviewComponent;
  let fixture: ComponentFixture<ArticlePreviewComponent>;
  let article: Article;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ArticlePreviewComponent, 
        ArticleMetaComponent 
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePreviewComponent);
    component = fixture.componentInstance;

    article = new Article();
    article.author = new Profile();
    component.article = article;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
