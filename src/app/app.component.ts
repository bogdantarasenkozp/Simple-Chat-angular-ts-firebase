import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  username: string;
  isLoggedIn: boolean;
  msgVal: string = '';

  constructor(public af: AngularFire) {
    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        this.username = auth.facebook.displayName;
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    });
  }

  chatSend(theirMessage: string) {
    console.log('here')
    console.log(theirMessage)
    this.items.push({ message: theirMessage, name: this.name.facebook.displayName});
    this.msgVal = '';
  }


}
