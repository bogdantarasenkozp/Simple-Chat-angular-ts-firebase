import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';
import { AuthService } from './../providers/auth.service';

@Component({
  selector:'loginComponent',
  templateUrl:'./login.component.html'
})

export class loginComponent {

  @Input() isLoggedIn;

  constructor (public authService: AuthService) {}

  login () {
    this.authService.loginWithFacebook().then((data) => {})
  }

  logout() {
    this.authService.logout().then((data) => {})
  }

}
