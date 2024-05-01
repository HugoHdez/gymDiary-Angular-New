import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserInformationFormComponent} from "./user-information-form/user-information-form.component";
import { ButtonLoginRegisterComponent } from './button-login-register/button-login-register.component';
import { DiaryComponent } from './diary/diary.component';
import { ExerciseByMuscleComponent } from './exercise-by-muscle/exercise-by-muscle.component';
import { ExercisesByMuscleComponent } from './exercises-by-muscle/exercises-by-muscle.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LogOutButtonComponent } from './log-out-button/log-out-button.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserInformationFormComponent,
    ButtonLoginRegisterComponent,
    DiaryComponent,
    ExerciseByMuscleComponent,
    ExercisesByMuscleComponent,
    ExercisesComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    LandingPageHeaderComponent,
    LandingPageComponent,
    LogOutButtonComponent,
    NavComponent,
    ProfileComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    //Firebase Authentication
    provideAuth(() => getAuth()),
    //Firebase Firestore
    provideFirestore(() => getFirestore()),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
