import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMyFeedComponent } from './home-my-feed.component';

describe('HomeMyFeedComponent', () => {
  let component: HomeMyFeedComponent;
  let fixture: ComponentFixture<HomeMyFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMyFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
