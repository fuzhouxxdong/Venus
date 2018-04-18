import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ElModule } from "element-angular/release/element-angular.module";
import { InformationComponent } from "./information/information.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ShareComponent } from "./share/share.component";
import { PersonalityComponent } from "./personality/personality.component";
import { PublishActivitiesComponent } from "./publish-activities.component";

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: PublishActivitiesComponent,
        children: [
          {
            path: 'step1',
            component: InformationComponent
          },
          {
            path: 'step2',
            component: RegistrationComponent
          },
          {
            path: 'step3',
            component: ShareComponent
          },
          {
            path: 'step4',
            component: PersonalityComponent
          }
        ]
      }
    ])
  ],
  declarations: [
    InformationComponent,
    RegistrationComponent,
    ShareComponent,
    PersonalityComponent,
    PublishActivitiesComponent
  ]
})
export class PublishActivitiesModule { }
