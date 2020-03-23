import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppURl } from 'src/app/config/app-urls.config';
import { ListnewsComponent } from './pages/listnews/listnews.component';
import { DetailnewsComponent } from './pages/detailnews/detailnews.component';
import { ListCommentsComponent } from './pages/list-comments/list-comments.component';
import { PreviewComponent } from './pages/preview/preview.component';

const routes: Routes = [
  { path: AppURl.AppNews, redirectTo: AppURl.AppNews, pathMatch: 'full' },
  { path: AppURl.AppList, component: ListnewsComponent},
  { path: AppURl.AppView + '/:id', component: DetailnewsComponent},
  { path: AppURl.AppListComments + '/:id', component: ListCommentsComponent},
  { path: AppURl.AppPreview, component: PreviewComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
