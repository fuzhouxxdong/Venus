import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './layout/header/header.component';
import {NavComponent} from './layout/nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {NgZorroAntdModule} from "ng-zorro-antd";
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'order',
            component: OrderComponent
          },
          {
            path: 'profile',
            component: ProfileComponent
          },
          {
            path: 'question',
            component: QuestionComponent
          },
        ]
      },
    ])

  ],
  declarations: [
    HomeComponent,
    OrderComponent,
    DashboardComponent,
    HeaderComponent,
    NavComponent,
    ProfileComponent,
    QuestionComponent,
    FooterComponent,
  ],
  exports: [
  ],
  providers: [
  ]
})
export class AdminModule {
}
