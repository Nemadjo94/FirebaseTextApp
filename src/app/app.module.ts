import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';

export const enviroment = {
  production: false,
  firebase: {
            apiKey: "AIzaSyBbwCRwp8pWe45-yoe5KzYBxJ8OJfo5rkc",
            authDomain: "textchat-40499.firebaseapp.com",
            databaseURL: "https://textchat-40499.firebaseio.com",
            projectId: "textchat-40499",
            storageBucket: "textchat-40499.appspot.com",
            messagingSenderId: "954502602081" 
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
