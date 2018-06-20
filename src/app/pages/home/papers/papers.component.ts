import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.css']
})
export class PapersComponent implements OnInit {

  papers = null;

  constructor(private http: Http) {
    this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/Papers.csv")
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
    lines.splice(0, 1);
    console.log(lines);
    
    this.papers = lines;
  }

  ngOnInit() {
  }

}
