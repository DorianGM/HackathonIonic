import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';


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
        this.http.get("https://www.sio-savary.fr/~sboitel/HackatWebInProd/public/api/evenements/initiation/"+this.item.id)
        .subscribe(results => {
          this.ListeArret=results;
        });


      }

      
    });




  }
  
  ngOnInit() {

  }
  MonClick(idevt){
    let navigationExtras: NavigationExtras = {
      state : {
        param3: idevt
      }
      };
    this.router.navigate(['/formulaire'], navigationExtras);
  }

}

