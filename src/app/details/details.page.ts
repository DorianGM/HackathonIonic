import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AppComponent } from '../app.component';
import { IonicAuthService } from '../ionic-auth.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  item: any;
  isconnected = 0;
  map: Map;
  lat: any = 0.0;
  long: any = 0.0;


  constructor(private socialSharing: SocialSharing, private router: Router, private activeRoute: ActivatedRoute, private ionicAuthService: IonicAuthService, private geolocation: Geolocation) {
    this.activeRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {

        this.item =
          this.router.getCurrentNavigation().extras.state.param1;

      }


    });
    console.log(this.item);
    this.isconnected = this.ionicAuthService.getConnected();


  }
  

  ionViewDidEnter() {

    this.geolocation.getCurrentPosition().then((data) => {

      // resp.coords.latitude
      // resp.coords.longitude

      console.log(data.coords);
      this.lat = this.item.latitude
      this.long = this.item.longitude
      return this.initMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    })



  }

  initMap() {

    // Centrer la carte sur la France

    this.map = new Map('map').setView([this.lat, this.long], 10);



    // Ajout des mentions OpenStreetMap, obligatoire

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

    }).addTo(this.map);

    marker([this.lat, this.long]).addTo(this.map);



    return;

  }

  ngOnInit() {
  }
  MonClick() {
    let navigationExtras: NavigationExtras = {
      state: {
        param1: this.item
      }
    };
    this.router.navigate(['/ateliers'], navigationExtras);
  }

  partager() {
    // Check if sharing via email is supported
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['sovann.boitel@gmail.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });

  }




}




