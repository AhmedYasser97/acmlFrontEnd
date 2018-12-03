import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegistrationValidator } from '../shared/register.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  registrationFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  passwordError: any;
  url: String;
 
  constructor(private formBuilder: FormBuilder, private http: Http, private router: Router) {
    this.passwordFormGroup = this.formBuilder.group({
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
      validator: RegistrationValidator.validate.bind(this)
    });
    this.registrationFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      passwordFormGroup: this.passwordFormGroup
    });
    //this.x='lala';
   }

   // saveUser(){
   // 	window.location.href = "http://localhost:4200/teams"
   // }

  ngOnInit() {
  }

  register(email: String, username: String, password1: String,password2: String){

  	var data = {
  		username: username,
  		email: email,
  		password1: password1,
  		password2: password2
  	};
  	this.http.post("http://yourdailyfootball.herokuapp.com/api/signup/",data).subscribe(res => {
  		console.log('ay 7aga');
  		this._router.navigate(['/teams']));
  	}, err => {
  		//passwordError = err.status;
  		console.log("no");
  	});
	}
  }

