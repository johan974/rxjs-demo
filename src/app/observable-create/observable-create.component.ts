import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-observable-create',
  templateUrl: './observable-create.component.html'
})
export class ObservableCreateComponent implements OnInit {
  console1 = '';
  console2 = '';

  constructor() { }

  ngOnInit() {
    let that = this;
    let observable = Observable.create( (observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    })
      .scan( (x,y) => { return x+y; } )
      .subscribe( e => {
        that.console1 += 'Output = ' + e + '|';
      });

    //
    let observable2 = Observable.create( (observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    observable2.subscribe({
      next: x => that.console2 += 'got value ' + x + '|',
      error: err => that.console2 += 'something wrong occurred: ' + err + '|',
      complete: () => that.console2 += 'done'+ '|'
    });
    console.log('just after subscribe');

    // Methods as push systems
    let foo = Observable.create( (observer) => {
      console.log('Hello');
      observer.next(42);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    foo.subscribe( (x) => {
      console.log( 'Foo-observer x: ' + x);
    });
    foo.subscribe( (y) => {
      console.log( 'Foo-observer y: ' +y);
    });

    foo.subscribe( (z) => {
      console.log( 'Foo-observer z: ' +z);
    });


  }

}
