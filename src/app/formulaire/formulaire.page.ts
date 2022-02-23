import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';
import { IonicAuthService } from '../ionic-auth.service';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  formulaire = {evenement:"",prenom:"",nom:"",mail:""}
  item3 : any;

  constructor(private router: Router, public http: HttpClient) { 
    if(this.router.getCurrentNavigation().extras.state){
        
      this.item3 = 
      this.router.getCurrentNavigation().extras.state.param3;


    };
  }

  ngOnInit() {
    
  }

  sendPostRequest() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'

   });
   let options = {
      headers: headers
   }

   let postData = {
    "evenement":this.item3,
    "prenom": this.formulaire.prenom,
    "nom": this.formulaire.nom,
    "mail": this.formulaire.mail,
}


    this.http.post("http://127.0.0.1:8000/api/add/inscriptionevent", postData, options)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }


  MonClick(){

 

    let navigationExtras: NavigationExtras = {
      state : {
      }
      };
    this.router.navigate(['/home'], navigationExtras);
  }
}

