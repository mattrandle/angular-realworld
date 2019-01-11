import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTagComponent } from './home-tag.component';

describe('HomeTagComponent', () => {
  let component: HomeTagComponent;
  let fixture: ComponentFixture<HomeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
