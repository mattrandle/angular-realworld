import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleMetaComponent } from 'components/article-meta/article-meta.component'
import { Article } from 'models/article.model';
import { Profile } from 'models/profile.model';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  let article: Article;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent, ArticleMetaComponent ],
      imports: [ RouterTestingModule, HttpClientModule, FormsModule ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { articleData: { article: new Article(), articleComments: [] } } } }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
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
