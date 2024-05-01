import {Component} from '@angular/core';
import {UserService} from "../user.service";
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {


  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  };

  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  register(){
    this.userService.register(this.registerForm.value)
      .then(uid => {
        console.log("Registered successfully! ", uid);
        this.router.navigate(['userInformationForm', {uid: uid}]);
      })
      .catch(response => {
        console.log("Registration failed... ", response);
        alert("Registration failed.");
      });
  }

  redirectToLogin(){
    this.router.navigate(['login']);
  }

}
