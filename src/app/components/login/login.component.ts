import {Component, OnInit, PLATFORM_INITIALIZER} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  formErrors: any;

  authUser: any;

  private _validationMessages: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) {
    this._buildForm();
  }

  ngOnInit() {
  }

  auth() {
    // this.authUser = this.authenticationService.auth(this.loginForm.value).subscribe(
    //   (data) => this.authUser = data
    // );

    // const formModel = this.loginForm.value;
     // const result = this.authenticationService.login(formModel.email, formModel.password);
    // if (result) {
    //   this.router.navigateByUrl('admin');
    // } else {
    //   this.router.navigateByUrl('login');
    // }


    this.router.navigateByUrl('admin');
  }


  private _buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }





}


