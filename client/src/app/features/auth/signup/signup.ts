import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormError } from '../../../core/components';
import {
  matchValidator,
  strongPasswordValidator,
} from '../../../core/validators/form.validator';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormError,
    MatButtonModule,
  ],
  template: `
    <section>
      <form (submit)="signup()" [formGroup]="signupForm">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput placeholder="Ex. John Doe" formControlName="name" />
          <app-form-error [control]="signupForm.get('name')"></app-form-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input
            matInput
            placeholder="Ex. example@gamil.com"
            type="email"
            formControlName="email"
          />
          <app-form-error [control]="signupForm.get('email')"></app-form-error>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Password</mat-label>
          <input
            matInput
            placeholder="Enter your password"
            type="password"
            formControlName="password"
          />
          <app-form-error
            [control]="signupForm.get('password')"
          ></app-form-error>
        </mat-form-field>

        <mat-form-field>
          <mat-label>Confirm Password</mat-label>
          <input
            matInput
            placeholder="Enter your password again"
            type="password"
            formControlName="confirmPassword"
          />
          <app-form-error
            [control]="signupForm.get('confirmPassword')"
          ></app-form-error>
        </mat-form-field>
        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="signupForm.invalid"
        >
          Sign Up
        </button>
      </form>
      <p>Already have account? <a>Login</a></p>
    </section>
  `,
  styles: ``,
})
export class Signup {
  readonly #formBuilder = inject(FormBuilder);
  protected signupForm = this.#formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, strongPasswordValidator()]],
    confirmPassword: ['', [Validators.required, matchValidator('password')]],
  });

  signup() {}
}
