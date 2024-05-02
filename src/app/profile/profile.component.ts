import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { finalize } from 'rxjs/operators';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  genre: string = '';
  height: string = '';
  weight: string = '';
  birthday: string = '';
  email: string = '';
  profileImageUrl: string = '';
  defaultProfileImageUrl: string = './../assets/images/User%20Icon%20Profile.png';
  newPassword: string = '';
  confirmPassword: string = '';
  passwordChangeSuccess: boolean = false;
  passwordChangeNoSuccess: boolean = false;
  passwordsDontMatch: boolean = false;

  selectedFile: File | null = null;

  constructor(private userService: UserService, private auth: Auth) {}

  ngOnInit() {
    this.getDataUser();
  }

  async getDataUser() {
    const userData = await this.userService.getDoc();
    if (userData) {
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
      this.genre = userData.gender;
      this.height = userData.height;
      this.weight = userData.weight;
      this.birthday = userData.birthdate;
      if (userData.profileImageUrl){
        this.profileImageUrl = userData.profileImageUrl;
      } else {
        this.profileImageUrl = this.defaultProfileImageUrl;
      }

    }
    const email = await this.userService.getEmail();
    if (email) {
      this.email = email;
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
    this.uploadProfileImage();
  }

  uploadProfileImage() {
    if (this.selectedFile) {
      const storage = getStorage();
      const filePath: string = `profile-images/${this.selectedFile.name}`;
      const storageRef = ref(storage, filePath);

      uploadBytes(storageRef, this.selectedFile).then(async snapshot => {
        const downloadUrl = await getDownloadURL(storageRef);
        this.profileImageUrl = downloadUrl;

        // Guardar la URL de la imagen en Firestore
        const userData = await this.userService.getDoc();
        if (userData && userData.uid) {
          await this.userService.updateUserProfileImage(userData.uid, downloadUrl);
        } else {
          console.error("No se pudo obtener el UID del usuario.");
        }
      }).catch(error => {
        console.error("Error al subir la imagen:", error);
      });
    }
  }

  changePassword() {
    if (this.newPassword === this.confirmPassword) {
      this.userService.changePassword(this.newPassword)
        .then(() => {
          console.log('Password changed successfully');
          this.passwordChangeSuccess = true;
          this.passwordsDontMatch = false;
          this.passwordChangeNoSuccess = false;
        })
        .catch(error => {
          console.error('Error changing password:', error);
          this.passwordChangeNoSuccess = true;
          this.passwordChangeSuccess = false;
          this.passwordsDontMatch = false;
        });
    } else {
      console.error('New password and confirm password do not match');
      this.passwordsDontMatch = true;
      this.passwordChangeNoSuccess = false;
      this.passwordChangeSuccess = false;
    }
  }


}
