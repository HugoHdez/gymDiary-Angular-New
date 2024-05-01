import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseByMuscleComponent } from './exercise-by-muscle.component';

describe('ExerciseByMuscleComponent', () => {
  let component: ExerciseByMuscleComponent;
  let fixture: ComponentFixture<ExerciseByMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseByMuscleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseByMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
