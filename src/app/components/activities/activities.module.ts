import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementActivitiesComponent } from './management-activities/management-activities.component';
import { RouterModule } from "@angular/router";
import { ElModule } from "element-angular/release/element-angular.module";
import { PublishActivitiesModule } from "./publish-activities/publish-activities.module";

@NgModule({
  imports: [
    CommonModule,
    PublishActivitiesModule,
    ElModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'publish',
        loadChildren: ()=> PublishActivitiesModule
      },
      {
        path: 'management',
        component: ManagementActivitiesComponent
      }

    ])
  ],
  declarations: [
    ManagementActivitiesComponent
  ]
})
export class ActivitiesModule { }
