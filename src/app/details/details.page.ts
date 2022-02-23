import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';
import { IonicAuthService } from '../ionic-auth.service';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item:any;
  isconnected=0;
  

  constructor(private router: Router, private activeRoute : ActivatedRoute, private nativeStorage: NativeStorage,private ionicAuthService: IonicAuthService) { 
    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        
        this.item = 
        this.router.getCurrentNavigation().extras.state.param1;


      }

      
    });
    this.isconnected = this.ionicAuthService.getConnected();

  }

  ngOnInit() {
  }
  MonClick(){
    let navigationExtras: NavigationExtras = {
      state : {
      param1: this.item
      }
      };
    this.router.navigate(['/ateliers'], navigationExtras);
  }
  

}


