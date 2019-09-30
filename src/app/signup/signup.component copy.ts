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
export class SignupComponent implements OnInit {
  // @Input() form: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {}
  submitted = false;
  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   fullname: new FormControl('', Validators.required),
    //   username: new FormControl('', Validators.required),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email,
    //     Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //   ]),
    //   password: new FormControl('', [
    //     Validators.required,
    //     PasswordStrengthValidator
    //   ])
    // });

    // use FormBuilder to create a form group
    this.signupForm = this.fb.group({
      fullname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
      password: new FormControl('', [
        Validators.required,
        PasswordStrengthValidator
      ])
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }
  onSignup() {
    this.submitted = true;
  }
}
