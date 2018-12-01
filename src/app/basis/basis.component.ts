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

  }




}
