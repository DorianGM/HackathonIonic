import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item="";
  user=1;

  constructor(private router: Router, private activeRoute : ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state){
        this.item = 
        this.router.getCurrentNavigation().extras.state.param1;
      }
      
    });
  }

  ngOnInit() {
  }

}
