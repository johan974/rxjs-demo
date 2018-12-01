import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html'
})
export class ReplaySubjectComponent implements OnInit {
  console1 = '';
  console2 = '';

  constructor() { }

  ngOnInit() {
    let subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => { this.console1 += '| observer-1: ' + v; }
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => { this.console2 += '| observer-2: ' + v; }
    });

    subject.next(5);
  }

}
