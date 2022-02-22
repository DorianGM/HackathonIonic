import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';
import { IonicAuthService } from '../ionic-auth.service';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  constructor(private router: Router, public http: HttpClient) { }

  ngOnInit() {
    
  }

  sendPostRequest() {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
   });
   let options = {
      headers: headers
   }

  

    let postData = {
            "evenement":'4',
            "prenom": "Customer004",
            "nom": "qdqzdqdq",
            "mail": "customer004@email.com",
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

