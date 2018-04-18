import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from './services/questions.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ElModule } from "element-angular/release/element-angular.module";
import { ActivitiesModule } from "./components/activities/activities.module";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ActivitiesModule,
    ElModule.forRoot(),
    RouterModule.forRoot([

      // { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: 'login', component: LoginComponent},
      // { path: 'register', component: RegisterComponent},
      // {
      //   path: 'admin',
      //   loadChildren: './components/admin/admin.module#AdminModule'
      // },
      {
        path: 'activities',
        loadChildren: ()=> ActivitiesModule
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
