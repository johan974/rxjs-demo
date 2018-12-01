import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasisComponent } from './basis/basis.component';
import { RxStreamComponent } from './rx-stream/rx-stream.component';
import { ObservableCreateComponent } from './observable-create/observable-create.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';


@NgModule({
  declarations: [
    AppComponent,
    BasisComponent,
    RxStreamComponent,
    ObservableCreateComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
