import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './news-routing.module';
import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ListnewsComponent } from './pages/listnews/listnews.component';
import { CreatenewsComponent } from './pages/createnews/createnews.component';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailnewsComponent } from './pages/detailnews/detailnews.component';

@NgModule({
  declarations: [
    ListnewsComponent,
    CreatenewsComponent,
    DetailnewsComponent
  ],
  imports: [CommonModule, InfoRoutingModule, CardModule, ColorPickerModule, ReactiveFormsModule],
  providers: [ FirebaseService]
})
export class NewsModule {}
