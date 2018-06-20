import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-quicklink',
  templateUrl: './quicklink.component.html',
  styleUrls: ['./quicklink.component.css']
})
export class QuicklinkComponent implements OnInit {

  ilinks = null;
  slinks = null;

  constructor(private http: Http) {
    this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/Quicklinks_Insti.csv")
    .subscribe(
      data => this.extractLinks(data, true),
      err => console.log(err)
    );

    this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/Quicklinks_Students.csv")
    .subscribe(
      data => this.extractLinks(data, false),
      err => console.log(err)
    );
  }

  private extractLinks(res: Response, boo: boolean) {

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
    if(boo) {
      this.ilinks = lines;
    } else {
      this.slinks = lines;
    }
    console.log(lines);
    
  }

  ngOnInit() {
  }

}
