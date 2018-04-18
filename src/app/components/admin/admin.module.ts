import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {AdminRoute} from './admin.routes';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    AdminRoute,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    OrderComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent,
    ProfileComponent,
    QuestionComponent
  ],
  exports: [
  ],
  providers: [
  ]
})
export class AdminModule {
}
