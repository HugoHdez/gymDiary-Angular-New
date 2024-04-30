import { Component } from '@angular/core';
import { UserService } from "../user.service";
import {FormControl, Validators, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations: [
    /*
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ])
     */
  ]
})
export class RegisterComponent {
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { };

  showAccountInformation = false;

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    birthdate: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    height: ['', [Validators.required]],
    weight: ['', [Validators.required]],
    username: ['', [Validators.required], Validators.minLength(2)],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  //Toggle between true and false to show Account Info or Personal Info in HTML
  changeBetweenPersonalAndAccountInfo(){
    this.showAccountInformation = !this.showAccountInformation;
  }

  register(){
    this.router.navigate(['login']);
  }

  redirectToLogin(){
    this.router.navigate(['login']);
  }

}
