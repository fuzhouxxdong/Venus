import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.styl']
})
export class InformationComponent implements OnInit {

  information: any;
  tagDialogvisible: boolean = false;

  ngOnInit() {
  }

  constructor() {
    this.information = {
      fenlies: [
        {
          label: 1,
          name: '未发布'
        },
        {
          label: 2,
          name: '测试活动'
        },
        {
          label: 3,
          name: '精彩活动'
        }
      ]
    }

  }

  showDialog(): void{
    this.tagDialogvisible = true;
  }

}
