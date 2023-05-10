import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRouteBeComponent } from './study-route-be.component';

describe('StudyRouteBeComponent', () => {
  let component: StudyRouteBeComponent;
  let fixture: ComponentFixture<StudyRouteBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyRouteBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyRouteBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
