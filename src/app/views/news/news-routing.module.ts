import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURl } from 'src/app/config/app-urls.config';
import { ListnewsComponent } from './pages/listnews/listnews.component';

// const routes: Routes = [
//    // { path: AppURl.AppNews, redirectTo: AppURl.AppNews, pathMatch: 'full' },
//    { path: AppURl.AppNews, component: ListnewsComponent},
// ];


const routes: Routes = [
  { path: AppURl.AppNews, redirectTo: AppURl.AppNews, pathMatch: 'full' },
  { path: AppURl.AppList, component: ListnewsComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoRoutingModule { }