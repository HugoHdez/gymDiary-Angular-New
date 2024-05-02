import {Injectable} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  user
} from "@angular/fire/auth";
import {doc, DocumentSnapshot, Firestore, getDoc, getFirestore, setDoc, updateDoc} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  private firestore = getFirestore();

  constructor(private auth: Auth, private firestoreService: Firestore) {
  }

  async register({ email, password }: any) {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    return credential.user.uid;
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return this.auth.signOut();
  }


  async createUserFirestore(uid: string, username: string, firstName: string, lastName: string, birthdate: string, gender: string,
                            height: number, weight: number) {
    await setDoc(doc(this.firestore, 'users', uid), {
      username: username,
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      gender: gender,
      height: height,
      weight: weight
    });
    console.log("Documento creado ");
  }

  async getDoc (){
    const uid = this.auth.currentUser?.uid;
    if (uid){
      const userDocRef = doc(this.firestore, 'users', uid);
      const userDocSnapshot: DocumentSnapshot<any> = await getDoc(userDocRef);
      if (userDocSnapshot.exists()){
        const userData = userDocSnapshot.data();
        return {
          username: userData.username,
          lastName: userData.lastName,
          firstName: userData.firstName,
          gender: userData.gender,
          height: userData.height,
          weight: userData.weight,
          birthdate: userData.birthdate,
          uid: uid,
          profileImageUrl : userData.profileImageUrl
        };
      } else {
        console.log("No se encontró ningún documento de usuario.");
        return null;
      }
    } else {
      console.log("El usuario no ha iniciado sesión.");
      return null;
    }
  }

  async getEmail() {
    const data = this.auth.currentUser;
    if (data){
      return data.email;
    } else{
      throw new Error("User not authenticated");
    }
  }
  async updateUserProfileImage(uid: string, imageUrl: string) {
    try {
      const userDocRef = doc(this.firestoreService, 'users', uid);
      await updateDoc(userDocRef, { profileImageUrl: imageUrl });
      console.log("URL de la imagen del perfil actualizada en Firestore");
    } catch (error) {
      console.error("Error al actualizar la URL de la imagen del perfil en Firestore:", error);
      throw error;
    }
  }

  async changePassword(newPassword: string): Promise<void> {
    try {
      const user = await this.auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        console.log('Password updated successfully');
      } else {
        console.error('No user found');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }

}
