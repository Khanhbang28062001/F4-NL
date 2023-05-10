import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepStudyComponent } from './keep-study.component';

describe('KeepStudyComponent', () => {
  let component: KeepStudyComponent;
  let fixture: ComponentFixture<KeepStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeepStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
