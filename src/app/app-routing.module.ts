import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:  Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
   { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'vista', loadChildren: () => import('./components/vista2/vista2.module').then(m => m.Vista2Module) },
  { path: 'vista3', loadChildren: () => import('./components/vista3/vista3.module').then(m => m.Vista3Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
