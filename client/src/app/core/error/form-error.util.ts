import { AbstractControl } from '@angular/forms';
import { ERROR_MESSAGES } from './error-message';

export function getControlError(control: AbstractControl | null): string {
  if (control && control.errors) {
    for (const errorKey of Object.keys(control.errors)) {
      const messageFn = ERROR_MESSAGES[errorKey];
      if (messageFn) {
        return messageFn(control.errors[errorKey]);
      }
    }
  }
  return '';
}
