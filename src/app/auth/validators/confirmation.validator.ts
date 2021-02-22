import {FormGroup} from '@angular/forms';

export function ConfirmationValidator(controlName: string, matchingControlName: string): CallableFunction {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmation) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({confirmation: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
