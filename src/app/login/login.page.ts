import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  submitted = false;

  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Adresse mail requise' 
      },
      { 
        type: 'pattern', 
        message: 'Adresse mail non valide' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Mot de passe requis' 
      },
      { 
        type: 'minlength', 
        message: 'Le mot de passe doit avoir une longueur de 6 carctères ou plus' 
      }
    ]
  };

  constructor(private router: Router,
    private ionicAuthService: IonicAuthService, public fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  get errorCtr() {
    return this.userForm.controls;
  }

  signIn(user) {
    this.ionicAuthService.signinUser(user)
      .then((response) => {
        user = 1
        console.log(response)
        this.errorMsg = "";
        this.router.navigateByUrl('home');
      }, error => {
        user = 0
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }

  
}