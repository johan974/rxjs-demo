import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-basis',
  templateUrl: './basis.component.html',
  styleUrls: ['./basis.component.css']
})
export class BasisComponent implements OnInit {
  clicked = 0;
  result = 'clicked ' + this.clicked + ' times';
  result2 = 'clicked ' + this.clicked + ' times';

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
