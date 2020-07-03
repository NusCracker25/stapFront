import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { StrapComponent } from './strap/strap.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [StrapComponent, HomeComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    CoreModule,
    ChatModule,
    UserModule
  ]

})
export class FeatureModule { }
