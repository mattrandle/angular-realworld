import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavoritedComponent } from './profile-favorited.component';

describe('ProfileFavoritedComponent', () => {
  let component: ProfileFavoritedComponent;
  let fixture: ComponentFixture<ProfileFavoritedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavoritedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavoritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
