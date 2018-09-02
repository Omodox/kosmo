import { Component, OnInit } from '@angular/core';
import { AllhttpService } from '../allhttp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private allHttpServise: AllhttpService,
    private activateRoute: ActivatedRoute,
  ) { }


  page;
  url;

  ngOnInit() {

    this.activateRoute.params.subscribe(res => {
      this.url = res.id;

      this.allHttpServise.getPage(this.url).subscribe(res2 => {
        console.log(res2);
        this.page = res2[0];
      });

    });

  }
}
