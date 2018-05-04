import {Component, OnInit} from '@angular/core';
import {HomeComponent} from '../home/home.component';
import {QuestionsService} from '../../../services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.styl']
})
export class QuestionComponent implements OnInit {

  public name: string;

  public content: string;

  public no: number;

  public opts: any;

  private _querstions: any;


  constructor(private home: HomeComponent,
              private querstionService: QuestionsService) {

  }


  loadData() {
    // return  this.querstionService.getQuestions().subscribe( res => {
    //   this._querstions = res['total'];
    // });

  }

  ngOnInit() {
    this.home.boxTitle = 'Question';
    // this.loadData();
  }
}
