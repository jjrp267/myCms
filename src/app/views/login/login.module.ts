import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AppURl } from 'src/app/config/app-urls.config';
import { SecureInnerPagesGuard } from 'src/app/core/guard/secure-inner-pages.guard';
import { AuthGuard } from 'src/app/core/guard/auth.guard';

const routes: Routes = [
  // { path: AppURl.AppSignRoot, redirectTo: AppURl.AppSignIn, pathMatch: 'full' },
  { path: AppURl.AppSignRoot, component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: AppURl.AppSignUp, component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: AppURl.AppVerify, component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard]},
  { path: AppURl.AppDashboard, component: DashboardComponent, canActivate: [AuthGuard]},
  { path: AppURl.AppForgotPassword, component: ForgotPasswordComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    VerifyEmailComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    ForgotPasswordComponent
  ]
})

export class LoginModule {}
