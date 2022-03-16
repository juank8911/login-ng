import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.scss'],
  providers:[AuthService]
})
export class Vista2Component implements OnInit {

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
    console.log('/////////////Cargando vista de Home');
    console.log(this.authSvc.getCurrentUser())
    if(!this.authSvc.getCurrentUser())
    {
        this.router.navigate(['/login'])
    }
    
  }
  }

