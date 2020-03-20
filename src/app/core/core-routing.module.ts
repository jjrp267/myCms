import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppURl } from '../config/app-urls.config';

const routes: Routes = [
  { path: AppURl.AppRoot, redirectTo: AppURl.AppHome, pathMatch: 'full' },
  { path: AppURl.AppHome, loadChildren: () => import('../views/home/home.module').then( m => m.HomePageModule)},
  { path: AppURl.AppInfo, loadChildren: () => import('../views/info/info.module').then( m => m.InfoModule)},
  { path: AppURl.AppSuperHero, loadChildren: () => import('../views/super-hero/super-hero.module').then( m => m.SuperHeroModule)},
  { path: AppURl.AppNews, loadChildren: () => import('../views/news/news.module').then( m => m.NewsModule)},
  { path: AppURl.AppSignIn, loadChildren: () => import('../views/login/login.module').then( m => m.LoginModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
