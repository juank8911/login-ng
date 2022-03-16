import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[AuthService]
})
export class HomeComponent implements OnInit {
  public user$: Observable<any>= this.authSvc.afAuth.user;
  public loged:boolean;
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {
    console.log('/////////////Cargando vista de Home');
    console.log(this.authSvc.getCurrentUser())
    if(!this.authSvc.getCurrentUser())
    {
        this.router.navigate(['/login'])
    }
    
  }

}
