import { Component, OnInit } from '@angular/core';

declare function require(path: string): any;

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

export interface Event {
  title: string;
  description: string;
  room: string;
  url: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public events: FirebaseListObservable<Event[]>;

  constructor(private db: AngularFireDatabase) {
    this.events = db.list('events');
  }

  ngOnInit() {
    require('../../../../assets/js/charts.js')();
  }

}
