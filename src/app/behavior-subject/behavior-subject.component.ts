import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html'
})
export class BehaviorSubjectComponent implements OnInit {
  console1 = '';
  console2 = '';

  constructor() { }

  ngOnInit() {
    let subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => { this.console1 += '| observer-1: ' + v; }
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => { this.console2 += '| observer-2: ' + v; }
    });

    subject.next(3);
  }

}
