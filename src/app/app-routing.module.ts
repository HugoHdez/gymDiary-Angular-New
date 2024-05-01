import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from './login/login.component';
import {UserInformationFormComponent} from "./user-information-form/user-information-form.component";
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component'
import {DiaryComponent} from "./diary/diary.component";
import {ProgressComponent} from "./progress/progress.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExercisesByMuscleComponent} from "./exercises-by-muscle/exercises-by-muscle.component";
import {ExerciseByMuscleComponent} from "./exercise-by-muscle/exercise-by-muscle.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userInformationForm', component: UserInformationFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'diary', component: DiaryComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'homePage', component: HomePageComponent},
  { path: 'exercises', component: ExercisesComponent},
  { path: 'exercisesByMuscle', component: ExercisesByMuscleComponent},
  { path: 'exerciseByMuscle', component: ExerciseByMuscleComponent},
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
