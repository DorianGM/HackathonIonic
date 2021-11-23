import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{


  ListeArret:any;
  constructor(private http: HttpClient,private router:Router, private nativeStorage: NativeStorage) {
    this.http.get("http://localhost:8000/api/hackathons")
    .subscribe(results => {
      this.ListeArret=results;
    });
  }
  
  MonClick(item){
    let navigationExtras: NavigationExtras = {
      state : {
      param1: item
      }
      };
    this.router.navigate(['/details'], navigationExtras);
  }
  
  
  ngOnInit() {
  }

}
