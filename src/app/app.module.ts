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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {AdminModule} from "./components/admin/admin.module";


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
    BrowserAnimationsModule,
    AdminModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: ()=> AdminModule
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
