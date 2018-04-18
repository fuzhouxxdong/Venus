import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionComponent } from './question/question.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'order', component: OrderComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'question', component: QuestionComponent},
      { path: '**', redirectTo: '' }
    ]
  },

];

export const AdminRoute = RouterModule.forChild(adminRoutes);
