import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormError } from './form-error';
import { beforeEach, describe, expect, it } from 'vitest';

describe('FormError', () => {
  let component: FormError;
  let fixture: ComponentFixture<FormError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormError],
    }).compileComponents();

    fixture = TestBed.createComponent(FormError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
