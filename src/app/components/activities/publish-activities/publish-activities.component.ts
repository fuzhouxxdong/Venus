import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-publish-activities',
  templateUrl: './publish-activities.component.html',
  styleUrls: ['./publish-activities.component.styl']
})
export class PublishActivitiesComponent implements OnInit {

  activeIndex: number = 1;
  activeUrl: string = 'step';
  preview: boolean = true;
  preStep: boolean = false;
  nextStep: boolean = true;
  publish: boolean = false;

  constructor(private router: Router) {
    this.router.navigateByUrl('activities/publish/' + this.activeUrl + this.activeIndex);
  }

  ngOnInit() {
  }

  handleNextStep(): void{
    this.activeIndex ++;
    this.router.navigateByUrl('activities/publish/' + this.activeUrl + this.activeIndex);
  }

  handlePreStep(): void{

  }

}
