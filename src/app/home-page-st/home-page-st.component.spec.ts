import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageStComponent } from './home-page-st.component';

describe('HomePageStComponent', () => {
  let component: HomePageStComponent;
  let fixture: ComponentFixture<HomePageStComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageStComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
