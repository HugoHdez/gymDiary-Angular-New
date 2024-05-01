import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from "../user.service";
@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrl: './user-information-form.component.css'
})
export class UserInformationFormComponent {
  uid: string = '';
  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.uid = params['uid'];
    });
  }

  get formValues(){
    return {
      username: this.userInformationForm.get('username') as FormControl,
      firstName: this.userInformationForm.get('firstName') as FormControl,
      lastName: this.userInformationForm.get('lastName') as FormControl,
      birthdate: this.userInformationForm.get('birthdate') as FormControl,
      gender: this.userInformationForm.get('gender') as FormControl,
      height: this.userInformationForm.get('height') as FormControl,
      weight: this.userInformationForm.get('weight') as FormControl
    }
  }



  userInformationForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    birthdate: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    height: ['', [Validators.required, Validators.min(120), Validators.max(230)]],
    weight: ['', [Validators.required, Validators.min(30)]]
  });

  registerUserInfo(){
    this.userService.createUserFirestore(this.uid, this.formValues.username.value, this.formValues.firstName.value,
      this.formValues.lastName.value, this.formValues.birthdate.value, this.formValues.gender.value,
      this.formValues.height.value, this.formValues.weight.value);
  }

}
