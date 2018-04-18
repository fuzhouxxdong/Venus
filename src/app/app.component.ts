import {Component} from '@angular/core';
import {Router} from "@angular/router";
import index from "@angular/cli/lib/cli";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  urlModel: string = 'activities/publish';

  title = 'app';

  constructor(private router: Router){
  }

  handle(index: string): void {
    this.router.navigateByUrl(index)
  }

}
