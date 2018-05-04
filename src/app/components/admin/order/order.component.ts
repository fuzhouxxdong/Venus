import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.styl']
})
export class OrderComponent implements OnInit {

  constructor(private home: HomeComponent) { }

  ngOnInit() {
    this.home.boxTitle = 'Order';
  }

}
