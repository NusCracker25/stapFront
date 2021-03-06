import { AuthGuard } from './guards/auth.guard';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { PasswordValidatorDirective } from './password-validator.directive';
import { UserEntryComponent } from './user-entry/user-entry.component';



@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [AuthGuard],
  declarations: [
    RegisterComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    PasswordValidatorDirective,
    UserEntryComponent],
  exports: [
    UserEntryComponent
  ]
})
export class UserModule { }
