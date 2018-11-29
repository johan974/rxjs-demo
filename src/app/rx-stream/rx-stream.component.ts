import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/throttle';
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-rx-stream',
  templateUrl: './rx-stream.component.html',
  styleUrls: ['./rx-stream.component.css']
})
export class RxStreamComponent implements OnInit {
  clickresult = '-';
  singleclickresult = "+";

  constructor() { }

  ngOnInit() {
    // Multi click

    let button = document.querySelector('.buttonclass');
    let clickStream = Observable.fromEvent(button, 'click');
    // let multiClickStream = clickStream
    //   .buffer(clickStream.throttleTime(250))
    //   .map(function(list) { return list.length; })
    //   .filter(function(x) { return x >= 2; });

    let multiClickStream = clickStream
      .buffer(clickStream.throttleTime(250))
      .map( (list) => { return list.length; })
      .filter( (x) => { return x >= 2; });

    // does not work .buffer(() => { return clickStream.throttleTime(250); } )
    // does not work .buffer(function() { return clickStream.throttleTime(250); })

    const that = this;
    multiClickStream.subscribe(function (numclicks) {
      that.clickresult = that.clickresult + "-" + numclicks;
      console.log( "Stream >>> " + numclicks);
    });
    // Is same
    multiClickStream.subscribe((numclicks) => {
      console.log( "Stream2 >>> " + numclicks);
    });

    // Single click
    let singleClickStream = clickStream
      .buffer( clickStream.throttleTime(250))
      .map( (list) => { return list.length; })
      .filter( (x) => { return x === 1; });

    singleClickStream.subscribe((event) => {
      that.singleclickresult += "+s+";
      console.log( "Stream2 >>> " + event.toString());
    });
  }

}
