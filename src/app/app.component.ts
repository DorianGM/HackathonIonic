import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user=0;
  // user = {
  //   nom:"toto",
  //   prenom:"titi",
  //   login:"tt@tt.fr"
  // }
   constructor() {
    // this.nativeStorage.setItem("user",this.user);
    
  }
}
