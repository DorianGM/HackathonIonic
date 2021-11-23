import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { IonicAuthService } from '../ionic-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})

export class RegisterPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  item = "";

  myDate: String = new Date().toISOString();
 

  ListeArret:any;
  constructor(private router: Router, private activeRoute : ActivatedRoute ,private ionicAuthService: IonicAuthService) { 
    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.item = 
        this.router.getCurrentNavigation().extras.state.param1;
      }
    });
  }

  ngOnInit() {
    
  }

  
}