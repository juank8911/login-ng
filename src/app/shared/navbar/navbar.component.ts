import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService]
})
export class NavbarComponent implements OnInit {
public isLogged = false;
public user$: Observable<any>= this.authSvc.afAuth.user;
  constructor(private authSvc:AuthService, private router:Router) { }

  async ngOnInit() {
    console.log('/////////////NavBar');
    console.log(this.authSvc.getCurrentUser())
    // if(this.user$){
    //   this.isLogged = true;
    //   this.router.navigate(['/'])
    // }
    // else{
    //   this.router.navigate(['/login'])
    // }
  }

 async onLogout()
  {
   await this.authSvc.logout();
   this.router.navigate(['/login'])
  }

}
