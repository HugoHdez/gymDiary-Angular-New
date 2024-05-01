import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import {UserInformationFormComponent} from "./user-information-form/user-information-form.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userInformationForm', component: UserInformationFormComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
