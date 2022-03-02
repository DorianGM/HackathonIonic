import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.page.html',
  styleUrls: ['./filtre.page.scss'],
})
export class FiltrePage implements OnInit {

  ListeArret:any;

  constructor(private http: HttpClient,private router:Router) {
    this.http.get("http://localhost:8000/api/evenements")
    .subscribe(results => {
      this.ListeArret=results;
      console.log(results);
    });
   }

  ngOnInit() {
  }

  MonClick(item){
    let navigationExtras: NavigationExtras = {
      state : {
      param1: item
      }
      };
    this.router.navigate(['/details'], navigationExtras);
  }

}
