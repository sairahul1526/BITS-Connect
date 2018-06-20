import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Http, Response, ResponseContentType, RequestOptions } from '@angular/http';

// import * as XLSX from 'xlsx';

import 'rxjs/Rx' ;

export interface Food {
  name: string;
  list: string;
}

type AOA = any[][];

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public foods: FirebaseListObservable<Food[]>;

  arrayBuffer:any;
  file:File;

  constructor(private db: AngularFireDatabase, private http: Http) {
    this.foods = db.list('food');
    // let options = new RequestOptions({responseType: ResponseContentType.Blob });
    // this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/mess_menu.xlsx", options)
    // .subscribe(
    //   data => this.extractXls(data),
    //   err => console.log(err)
    // );

    
  }

  // data: AOA = [ [1, 2], [3, 4] ];

  // private extractXls(res: Response) {
  //   console.log(res);
  //   var blob = new Blob([res], { type: 'text/csv' });
  //   var url= window.URL.createObjectURL(blob);
  //   window.open(url);
  //   var data = this.http.get("https://raw.githubusercontent.com/blogofcode/angular2-examples/master/app/readCsvData/mess_menu.xlsx",{responseType: ResponseContentType.Blob }).map(
  //     (res) => {
  //         return new Blob([res.blob()], { type: 'application/vnd.ms-excel' })
  //     });
  //     console.log(data);
      
  // }

  ngOnInit() {
  }

}
