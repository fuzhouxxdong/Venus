import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import 'rxjs/Rx';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {

  public headerTitle: string;

  datasource: Observable<any>;

  constructor (private http: HttpClient) {
    this.headerTitle = '111111111122';
  }

  auth(user: User): Observable<any> {
    return this.http.post('/api/auth', user);

    // this.datasource.subscribe((data) => authUser = data.body);
    // if (authUser) {
    //   console.log(authUser.id);
    //   console.log(authUser.username);
    // }
    // debugger;
    // return authUser;
  }

  // getCurrentAccount(): Observable<Account> {
  //   return this.subject.asObservable();
  // }


  // isLogin() {
  //   return this.account && this.account.id != null;
  // }
  //
  // getAcctount() {
  //   return this.account;
  // }
  //
  // hasRole(role: string) {
  //   return this.account && this.account.roles.includes(role);
  // }

}
