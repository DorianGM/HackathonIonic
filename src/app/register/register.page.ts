import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})

export class RegisterPage implements OnInit {
  myForm: FormGroup;
  submitted = false;

 

  ListeArret:any;
  constructor(private http: HttpClient,private router:Router) {
    this.http.get("http://localhost:8000/api/hackathons")
    .subscribe(results => {
      this.ListeArret=results
    });
  }

  ngOnInit() {
    
  }

  
}