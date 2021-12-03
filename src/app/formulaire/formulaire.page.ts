import { HttpClient } from '@angular/common/http';
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

  constructor(private router: Router, private activeRoute : ActivatedRoute, private nativeStorage: NativeStorage,private ionicAuthService: IonicAuthService, public httpClient: HttpClient) { }

  ngOnInit() {
    
  }

  // sendPostRequest() {
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json' );
  //   const requestOptions = new RequestOptions({ headers: headers });

  //   let postData = {
  //           "name": "Customer004",
  //           "email": "customer004@email.com",
  //           "tel": "0000252525"
  //   }

  //   this.http.post("http://127.0.0.1:8100/ateliers", postData, requestOptions)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //      }, error => {
  //       console.log(error);
  //     });
  // }

  MonClick(){
    let navigationExtras: NavigationExtras = {
      state : {
      }
      };
    this.router.navigate(['/home'], navigationExtras);
  }
}
