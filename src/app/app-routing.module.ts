import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'filtre',
    loadChildren: () => import('./filtre/filtre.module').then( m => m.FiltrePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'ateliers',
    loadChildren: () => import('./ateliers/ateliers.module').then( m => m.AteliersPageModule)
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'filtre',
    loadChildren: () => import('./filtre/filtre.module').then( m => m.FiltrePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
