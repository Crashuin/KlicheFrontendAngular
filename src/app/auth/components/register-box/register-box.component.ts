import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-register-box',
  templateUrl: './register-box.component.html',
  styleUrls: ['./register-box.component.css']
})
export class RegisterBoxComponent {

  public signup: FormGroup|any;

  constructor(
    private _fb: FormBuilder,
  ){


  }

  ngOnInit(): void {

      this.signup = this._fb.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      });
  }

  //validaciones

  get fname() {
    return this.signup.get('fname') as FormControl;
  }

  get lname() {
    return this.signup.get('lname') as FormControl;
  }

  get email() {
    return this.signup.get('email') as FormControl;
  }

  get password() {
    return this.signup.get('password') as FormControl;
  }

}
