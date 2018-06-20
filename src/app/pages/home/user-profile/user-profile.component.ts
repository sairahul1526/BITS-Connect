import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';

export interface Date {
  date: string;
  event: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  dates = null;

  constructor(private http: Http) {
    this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/Important_Dates.csv")
    .subscribe(
      data => this.extractData(data),
      err => console.log(err)
    );
  }

  private extractData(res: Response) {

    let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    let lines = [];

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }
    this.dates = lines;
  }

  ngOnInit() {
  }

}
