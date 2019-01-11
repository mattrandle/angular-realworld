import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { ArticleListComponent } from './article-list.component';
import { ArticlePreviewComponent } from 'components/article-preview/article-preview.component'
import { ArticleMetaComponent } from 'components/article-meta/article-meta.component'

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ArticleListComponent, 
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
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
