import {Injectable} from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private firestore: Firestore) {
  }

  async register({email, password}: any) {
    // We create the user in Authentication service
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    /*
     * We will save the uid of the user creation in order to store it in firestore too. That will maintain a relation
     * between the user in Authentication service and Firestore service users.
     */
    return credential.user.uid;
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(){
    return this.auth.signOut();
  }

  //Function to create users collection in firestore
  async createUserFirestore(uid: string, username: string, firstName: string, lastName: string, birthdate: string, gender: string,
                            height: number, weight: number){
    const docRef = await setDoc(doc(this.firestore, 'users', uid), {
      username: username,
      firstName: firstName,
      lastName: lastName,
      birthdate: birthdate,
      gender: gender,
      height: height,
      weight: weight
    });
    console.log("Document created ");
  }
}
