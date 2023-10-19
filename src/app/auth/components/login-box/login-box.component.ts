import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit {

  public login: FormGroup|any;

  constructor(
    private _fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.login = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.login.get('email') as FormControl;
  }

  get password() {
    return this.login.get('password') as FormControl;
  }

}
