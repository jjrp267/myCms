import { NotificationService } from './services/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotificationService,
    // NewsService
  ],
  imports: [
    CommonModule
  ],
  providers: [
    NotificationService
  ]
})
export class ShareModule { }
