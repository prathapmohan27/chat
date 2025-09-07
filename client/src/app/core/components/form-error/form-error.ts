import { Component, effect, input, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatError } from '@angular/material/input';
import { getControlError } from '../../error/form-error.util';

@Component({
  selector: 'app-form-error',
  imports: [MatError],
  template: `
    @if (control()?.touched || control()?.dirty) {
      @if (control()?.invalid) {
        <mat-error>
          {{ getError(control()) }}
        </mat-error>
      }
    }
  `,
  styles: ``,
})
export class FormError {
  control = input.required<AbstractControl | null>();

  getError(control: AbstractControl | null): string {
    console.log(getControlError(control));
    return getControlError(control);
  }
}
