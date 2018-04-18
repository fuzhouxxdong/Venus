import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    // return this.http.get('datas/questions.json').map((res) => res.json());


    // return this.http.get('datas/questions.json').map(this._extractData).catch(this._handleError);
  }

}
