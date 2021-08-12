import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  ngOnInit(): void {
  }

}
