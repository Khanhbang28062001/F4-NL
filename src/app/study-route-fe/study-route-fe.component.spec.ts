import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRouteFeComponent } from './study-route-fe.component';

describe('StudyRouteFeComponent', () => {
  let component: StudyRouteFeComponent;
  let fixture: ComponentFixture<StudyRouteFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyRouteFeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyRouteFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
