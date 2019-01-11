import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGlobalFeedComponent } from './home-global-feed.component';

describe('HomeGlobalFeedComponent', () => {
  let component: HomeGlobalFeedComponent;
  let fixture: ComponentFixture<HomeGlobalFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGlobalFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGlobalFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
