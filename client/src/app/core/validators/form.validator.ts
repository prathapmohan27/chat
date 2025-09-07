import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null;

    const errors: ValidationErrors = {};

    if (value.length < 8) {
      errors['minlength'] = { requiredLength: 8, actualLength: value.length };
    }
    if (!/[a-z]/.test(value)) {
      errors['minLowercase'] = true;
    }
    if (!/[A-Z]/.test(value)) {
      errors['minUppercase'] = true;
    }
    if (!/[0-9]/.test(value)) {
      errors['minNumbers'] = true;
    }
    if (!/[^a-zA-Z0-9]/.test(value)) {
      errors['minSymbols'] = true;
    }

    return Object.keys(errors).length ? errors : null;
  };
}

export function matchValidator(
  controlName: string,
  errorKey: string = 'mismatch',
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const strongPassword =
      (control.parent as FormGroup)?.controls?.[controlName].value ?? '';
    const matchingControl = control.value;

    if (!strongPassword || !matchingControl) return null;

    return strongPassword !== matchingControl ? { [errorKey]: true } : null;
  };
}
