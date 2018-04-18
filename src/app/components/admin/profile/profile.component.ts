import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private home: HomeComponent) { }

  ngOnInit() {
    this.home.boxTitle = 'Profile';
  }

}
