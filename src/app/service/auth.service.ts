import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  // Login
  public login(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Logout
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  //Recupera el usuario actual
  public getCurrentUser(): Observable<firebase.default.User>{
    return this.afAuth.authState;
  }

  //Crea un nuevo usuario
  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> 
  {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  //Manda un email para resetear la contraseña
  resetPassword(email: string): Promise<void> {
    return this.afAuth.sendPasswordResetEmail(email);
  }



}
