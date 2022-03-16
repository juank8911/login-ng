import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from 'firebase/auth';
import { User } from 'firebase/auth';
import { first } from 'rxjs';
import { Router } from '@angular/router';
AngularFireAuth
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user:User;

  constructor(public afAuth: AngularFireAuth,private router:Router) { 

  }

  async login( email:string, password:string){
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,password); 
      return result;
    } catch (error) {
      console.log(error)
    }
    
   }
  async register(email:string,password:string){
      try {
        const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
        return result
      } catch (error) {
        console.log(error)
      }
  }
  async logout(){
await this.afAuth.signOut();

//redirigir usuario
  }
  async getCurrentUser(){
  await this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in ->');
      } else {
        console.log('user not logged in');
        this.router.navigate(['/login'])
      }
    });
  }
}
