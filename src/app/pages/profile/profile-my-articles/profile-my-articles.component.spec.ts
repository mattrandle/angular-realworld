import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyArticlesComponent } from './profile-my-articles.component';

describe('ProfileMyArticlesComponent', () => {
  let component: ProfileMyArticlesComponent;
  let fixture: ComponentFixture<ProfileMyArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMyArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
