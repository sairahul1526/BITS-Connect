import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

export interface Complaint {
  name: string;
  email: string;
  phone: string;
  room: string;
  complaint: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  public complaints: FirebaseListObservable<Complaint[]>;

  constructor(private db: AngularFireDatabase) {
    this.complaints = db.list('complaints');
  }

  ngOnInit() {
  }

  submit(name, email, phone, room, complaint) {
    if (email.includes("@pilani.bits-pilani.ac.in") && name.length > 0 && !isNaN(phone) && phone.length == 10 && room.length > 0 && complaint.length > 0) {
      var comp = {
        name: name,
        email: email,
        phone: phone,
        room: room,
        complaint: complaint
      };
      this.complaints.push(comp);
      window.location.reload();
    }
  }

}
