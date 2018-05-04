import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {

  public boxTitle = 'Home';

  public headerTitle: string;

  constructor(private authenticationService: AuthenticationService) {
    this.headerTitle = this.authenticationService.headerTitle;
  }

  ngOnInit() {
  }

}
