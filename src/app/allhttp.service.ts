import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AllhttpService {


  server = 'https://netkit.xyz/api/render.php';
  token;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }


  getPage(url) {
       return this.http.get(`${this.server}?set=page&id=2&url=${url}`);
  }


  getPagesByShablon(id) {
          return this.http.get(`${this.server}?set=page&id=${id}&order=shablon`);
  }

  getFilds(id) {
       return this.http.get(`${this.server}?set=filds&id=${id}`);
  }

  getPagesPerShablon(id) {
       return this.http.get(`${this.server}?set=pages&order=shablon&id=${id}`);
  }





}
