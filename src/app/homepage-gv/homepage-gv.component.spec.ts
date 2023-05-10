import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageGvComponent } from './homepage-gv.component';

describe('HomepageGvComponent', () => {
  let component: HomepageGvComponent;
  let fixture: ComponentFixture<HomepageGvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageGvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageGvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
