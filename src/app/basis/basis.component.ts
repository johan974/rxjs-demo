import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-basis',
  templateUrl: './basis.component.html'
})
export class BasisComponent implements OnInit {
  clicked = 0;
  result = 'clicked ' + this.clicked + ' times';
  result2 = 'clicked ' + this.clicked + ' times';
  scanTotal = 0;
  mycount = 0;

  constructor() { }

  ngOnInit() {
    // old way - find first element of this class (here: button)
    var button = document.querySelector('button');
    console.log( 'Button = ' + button);
    button.addEventListener('click', () => {
      this.clicked++;
      this.result = 'clicked ' + this.clicked + ' times';
      console.log('Clicked1!');
    });

    Observable.fromEvent(button, 'click').subscribe(() => {
      this.clicked++;
      this.result2 = 'clicked2 ' + this.clicked + ' times';
      console.log('Clicked2!');
    });

    // 3- Scan
    let that = this;
    const clicks = Observable.fromEvent(document, 'click');
    clicks
      .map(e => Math.random() * 100 )
      .scan((totalScore, current) => totalScore + current)
      .subscribe(data => {
        that.scanTotal = data;
        console.log( 'click event after scan');
      });

    // 4 - switchmap
    // const clicksMap = Observable.fromEvent(document, 'click');
    // clicksMap.switchMap(click => {
    //   return Rx.Observable.interval(500)
    // })
    //   .subscribe(i => print(i))
  }




}
