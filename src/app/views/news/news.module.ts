import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './news-routing.module';
import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ListnewsComponent } from './pages/listnews/listnews.component';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@NgModule({
  declarations: [
    ListnewsComponent
  ],
  imports: [CommonModule, InfoRoutingModule, CardModule, ColorPickerModule],
  providers: [ FirebaseService]
})
export class NewsModule {}
