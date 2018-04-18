import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private home: HomeComponent) {
  }

  ngOnInit() {
    this.home.boxTitle = 'Dashboard';
  }

}
