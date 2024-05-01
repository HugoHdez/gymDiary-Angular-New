import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesByMuscleComponent } from './exercises-by-muscle.component';

describe('ExercisesByMuscleComponent', () => {
  let component: ExercisesByMuscleComponent;
  let fixture: ComponentFixture<ExercisesByMuscleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExercisesByMuscleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExercisesByMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
