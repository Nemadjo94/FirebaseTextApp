import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { FirebaseDatabase } from 'angularfire2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: AngularFireList<any[]>;

  constructor(public db: AngularFireDatabase) {

  }
   

  ngOnInit() {
    this.getChatData();
  }

  getChatData(){

    this.messages = this.db.list('chat_message')

  }

}
