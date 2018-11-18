import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  datalist:[]
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 30,
    loop:true,
    autoplay:2000,
};
  constructor(private http:Http) { }

  ngOnInit() {
    this.http.get("/product/spus?ids=1000222,1000229,1000235,1000254,1000261,1000322,1000324,1000338,1000352,1000357,1000363,1000363,1000364,1000365,1000377,1000378,1000397,1000401,1000404,1000405,1000406,1000416,1000417,1000418,1000421,1000422,1000423,1000426,1000428,1000433,1000438,1000449,1000450,1000451,1000452,1000458,1000464,1000464,1000464,1000467,1000470,1000471,1000473,1000474,1000477,1000488,1000489,1000491,1000493,1000494,1000495,1000498,1000499,1000500,1000503,1000504,1000504,1000506,1000509,1000517,1000517,1000520,1000521,1000522,1000523,1000524,1000525,1000528,1000529,1000531,1000532,1000533,1000536,1000536,1000539,1000540,1000543,1000545,1000546,1000548,1000549,1000550,1000553,1000554,1000557,1000558,1000559,1000560").subscribe(res=>{
      console.log(res.json().data);
      this.datalist =res.json().data;
      console.log(this.datalist);
    })
    // this.http.get("/marketing/mobile/index_4f607640e96dcb8c34e228687e1ec81f.json").subscribe(res=>{
    //   console.log(res);
    // })
    this.http.get("/marketing/mobile/index_4f607640e96dcb8c34e228687e1ec81f.json").toPromise().then(res=>{
      console.log(res.json());
    }).catch(error=>{
      console.log(error);
    })
  }

}
