import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  @Input()
  public headerTitle = 'admin';

  constructor (private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
