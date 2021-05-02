import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-gua\
rd';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    loadChildren: () => import('./home/home.module')
                          .then( m => m.HomePageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'lists',
    loadChildren: () => import('./modals/lists/lists.module')
                          .then( m => m.ListsPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module')
                          .then( m => m.PerfilPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin} 
  },
  {
    path: 'viendo',
    loadChildren: () => import('./pages/viendo/viendo.module')
                          .then( m => m.ViendoPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'vistas',
    loadChildren: () => import('./pages/vistas/vistas.module')
                          .then( m => m.VistasPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin}
  },
  { path: 'favoritos', 
    loadChildren: () => import('./pages/favoritos/favoritos.module')
                          .then( m => m.FavoritosPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin } 
  },
  {
    path: 'pendientes',
    loadChildren: () => import('./pages/pendientes/pendientes.module')
                          .then( m => m.PendientesPageModule),
                          canActivate: [AngularFireAuthGuard],
                          data: { authGuardPipe: redirectUnauthorizedToLogin} 
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
                          .then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
