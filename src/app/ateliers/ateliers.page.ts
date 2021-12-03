import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-ateliers',
  templateUrl: 'ateliers.page.html',
  styleUrls: ['ateliers.page.scss'],
})
export class AteliersPage{
  item:any;
  ListeArret:any;
  isbt=0;
  constructor(private http: HttpClient,private router:Router,private activeRoute : ActivatedRoute ) {

    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.item =  this.router.getCurrentNavigation().extras.state.param1;
        this.http.get("http://localhost:8000/api/evenements/initiation/"+this.item.idH)
        .subscribe(results => {
          this.ListeArret=results;
        });


      }

      
    });




  }
  
  ngOnInit() {

  }
  MonClick(){
    let navigationExtras: NavigationExtras = {
      state : {
      }
      };
    this.router.navigate(['/formulaire'], navigationExtras);
  }

}
