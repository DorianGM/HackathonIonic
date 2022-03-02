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
  ListeArretAff:any;
  ListeVille:any;
  constructor(private http: HttpClient,private router:Router) {
    this.http.get("http://localhost:8000/api/evenements")
    .subscribe(results => {
      this.ListeArret=results;
      this.ListeArretAff=results;

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      //var unique = this.ListeArret.filter(onlyUnique);

      const unique = [...new Set(this.ListeArret.map(item2 => item2.ville))];

      console.log(unique);
      this.ListeVille=unique;
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

  onChange($evt){
    console.log($evt);
    this.ListeArretAff=[];
    this.ListeArret.forEach(el => {
      if(el.ville == $evt.detail.value)this.ListeArretAff.push(el);
    });
  }
  
  
  ngOnInit() {
  }

}

