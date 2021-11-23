import { Component } from '@angular/core';
import { IonicAuthService } from './ionic-auth.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


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
   constructor(private nativeStorage: NativeStorage, private connect: IonicAuthService) {
    // this.nativeStorage.getItem("isConnect",this.user);
    this.nativeStorage.getItem("isConnected");
    //ionic-----service.setIsConnected()
    this.connect.setIsConnected(this.connect.getConnected());
  }
}
