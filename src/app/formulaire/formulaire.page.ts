import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';
import { IonicAuthService } from '../ionic-auth.service';

import { Storage } from '@ionic/storage';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  formulaire = {evenement:"",prenom:"",nom:"",mail:""}
  item3 : any;

  constructor(private router: Router, public http: HttpClient, private storage: Storage) { 
    if(this.router.getCurrentNavigation().extras.state){
        
      this.item3 = 
      this.router.getCurrentNavigation().extras.state.param3;

      this.storage.get('utilisateur')

      .then(

        data => {
          this.formulaire.mail = data.mail,
          this.formulaire.prenom = data.prenom,
          this.formulaire.nom = data.nom
        },

        error => console.error(error)

      );


    };

  }



  ngOnInit() {
    
  }

  sendPostRequest() {

    /* let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'

   });
   let options = {
      headers: headers
   } */

   let postData = {
    "evenement":this.item3,
    "prenom": this.formulaire.prenom,
    "nom": this.formulaire.nom,
    "mail": this.formulaire.mail,
}

this.storage.set('utilisateur', postData);
  


          this.http.post("https://www.sio-savary.fr/~sboitel/HackatWebInProd/public/api/add/inscriptionevent", postData)
          .subscribe(data => {
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });
    
          let navigationExtras: NavigationExtras = {
            state : {
            }
            };
          this.router.navigate(['/home'], navigationExtras);

  }


  MonClick(){
    let navigationExtras: NavigationExtras = {
      state : {
      }
      };
    this.router.navigate(['/home'], navigationExtras);
  }
}

