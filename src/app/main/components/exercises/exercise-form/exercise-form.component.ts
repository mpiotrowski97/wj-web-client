import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExerciseDto } from '../../../../core/models/api-specification';

@Component({
  selector: 'wj-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {

  public categories: string[] = [
    'biceps', 'triceps', 'back', 'stomach', 'shoulders', 'legs'
  ];

  public types: string[] = [
    'time', 'weight', 'distance'
  ];

  public exerciseForm: FormGroup;

  @Input()
  private exercise: ExerciseDto = {id: '', name: '', category: '', type: '', description: '', videoUrl: ''};

  @Input()
  public isFormProcessing: boolean;

  @Input()
  public formHeader: string;

  @Output()
  private exerciseFormSubmit: EventEmitter<ExerciseDto> = new EventEmitter<ExerciseDto>();

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.exerciseForm = this.formBuilder.group({
      name: this.formBuilder.control(this.exercise.name, [Validators.required]),
      description: this.formBuilder.control(this.exercise.description),
      videoUrl: this.formBuilder.control(this.exercise.videoUrl),
      type: this.formBuilder.control(this.exercise.type, [Validators.required]),
      category: this.formBuilder.control(this.exercise.category, [Validators.required])
    });
  }

  handleFormSubmit(): void {
    this.exerciseFormSubmit.emit({
      id: this.exercise.id,
      name: this.exerciseForm.get('name').value,
      description: this.exerciseForm.get('description').value,
      videoUrl: this.exerciseForm.get('videoUrl').value,
      type: this.exerciseForm.get('type').value,
      category: this.exerciseForm.get('category').value
    });
  }
}
