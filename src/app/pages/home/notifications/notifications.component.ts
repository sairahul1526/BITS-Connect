import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

export interface Item {
  item: string;
  phone: string;
  location: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  select = true;

  public losts: FirebaseListObservable<Item[]>;
  public founds: FirebaseListObservable<Item[]>;

  constructor(private db: AngularFireDatabase) { 
    this.losts = db.list('lost');
    this.founds = db.list('found');
  }

  ngOnInit() {
  }

  submit(item, phone, location) {
    if (item.length > 0 && !isNaN(phone) && phone.length == 10 && location.length > 0) {
      var comp = {
        item: item,
        phone: phone,
        location: location
      };
      if(document.getElementById("test1")["checked"]) {
        this.losts.push(comp);
      } else {
        this.founds.push(comp);
      }
      window.location.reload();
    }
  }

}
