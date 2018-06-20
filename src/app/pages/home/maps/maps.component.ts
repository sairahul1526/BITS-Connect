import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

export interface Buy {
  name: string;
  phone: string;
  item: string;
}

export interface Sell {
  name: string;
  price: string;
  phone: string;
  item: string;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  public buys: FirebaseListObservable<Buy[]>;
  public sells: FirebaseListObservable<Sell[]>;

  constructor(private db: AngularFireDatabase) { 
    this.buys = db.list('buys');
    this.sells = db.list('sells');
  }

  ngOnInit() {
  }

  submit(name, phone, item, price) {
    if(document.getElementById("test1")["checked"]) {
      if (name.length > 0 && !isNaN(phone) && phone.length == 10 && item.length > 0) {
        var comp = {
          name: name,
          phone: phone,
          item: item
        };
        this.buys.push(comp);
        window.location.reload();
      }
    } else {
      if (name.length > 0 && !isNaN(phone) && phone.length == 10 && item.length > 0 && !isNaN(price) && price.length > 0) {
        var comp1 = {
          name: name,
          price: price,
          phone: phone,
          item: item
        };
        this.sells.push(comp1);
        window.location.reload();
      }
    }
  }
  
}
