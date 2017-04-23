import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyA-nYRU0EOxRrPAnCmHLlT3WLJxSogSu9k",
    authDomain: "testchat-9a18e.firebaseapp.com",
    databaseURL: "https://testchat-9a18e.firebaseio.com",
    projectId: "testchat-9a18e",
    storageBucket: "testchat-9a18e.appspot.com",
    messagingSenderId: "980735192931"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
