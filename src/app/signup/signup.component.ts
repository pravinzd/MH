import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { PasswordStrengthValidator } from './password-strength.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = fb.group({
      fullname: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordStrengthValidator]]
    });
  }
  get f() {
    return this.signupForm.controls;
  }
}
