import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ArticleMetaComponent } from './article-meta.component';
import { Article } from 'models/article.model';
import { Profile } from 'models/profile.model';

describe('ArticleMetaComponent', () => {
  let component: ArticleMetaComponent;
  let fixture: ComponentFixture<ArticleMetaComponent>;
  let article: Article;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
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
    fixture = TestBed.createComponent(ArticleMetaComponent);
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
