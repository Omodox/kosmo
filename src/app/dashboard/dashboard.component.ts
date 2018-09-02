import { Component, OnInit } from '@angular/core';
import { AllhttpService } from '../allhttp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private allHttpServise: AllhttpService,
  ) { }

  page;
  games;

  ngOnInit() {

    this.allHttpServise.getPage('/').subscribe(res => {
      console.log(res);
      this.page = res;
    });

    this.allHttpServise.getPagesByShablon('7').subscribe(res => {
      console.log(res);
      this.games = res;
    });

  }

}
