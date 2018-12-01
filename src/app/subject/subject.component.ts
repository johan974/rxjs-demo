import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import 'rxjs/add/observable/from';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {
  console1 = '';
  console2 = '';

  constructor() { }

  ngOnInit() {
    let subject = new Subject();

    subject.subscribe({
      next: (v) => { this.console1 += '| observerA: ' + v; }
    });
    subject.subscribe({
      next: (v) => { this.console2 += '| observerA: ' + v; }
    });

    subject.next(1);
    subject.next(2);

    let observable = Observable.from([1, 2, 3]);
    observable.subscribe(subject);
  }

}
