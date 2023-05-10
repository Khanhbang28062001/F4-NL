import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRouteComponent } from './study-route.component';

describe('StudyRouteComponent', () => {
  let component: StudyRouteComponent;
  let fixture: ComponentFixture<StudyRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
