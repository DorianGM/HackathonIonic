import { Component } from '@angular/core';
import { IonicAuthService } from './ionic-auth.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // user = {
  //   nom:"grimaud",
  //   prenom:"dorian",
  //   login:"tt@tt.fr"
  // }
   constructor(private connect: IonicAuthService) {

    //ionic-----service.setIsConnected()
    this.connect.setIsConnected(1);
  }
}
