import { Component } from '@angular/core';
import { UserService } from "../user.service";
import {FormControl, Validators, FormBuilder} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {};

  get email(){
    //returns the value as a FormControl object
    return this.loginForm.get('email') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })


  login(){
    this.userService.login(this.loginForm.value)
      .then(() => {
        console.log("login success");
        this.router.navigate(['homePage']);
      })
      .catch(() => {
        console.log("login failed");
      });
  }

  redirectToRegister(){
    this.router.navigate(['register']);
  }
}
