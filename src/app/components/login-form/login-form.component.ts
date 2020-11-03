import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() onLoginSuccess = new EventEmitter<User>();
  @Output() onLoginFailure = new EventEmitter<any>();

  loginInfo: { userName: string, password: string, remember:boolean };
  resources = environment.resources;
  formGroup: FormGroup;

  constructor(private service: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginInfo = {
      userName: '',
      password: '',
      remember: false
    };
    this.formGroup = this.formBuilder.group({
      'userName': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': ['']});
  }

  onSignInClick() {
    this.service.login(this.loginInfo.userName, this.loginInfo.password)
      .then(user => this.onLoginSuccess.emit(user))
      .catch(error => this.onLoginFailure.emit(error));
  }
}
