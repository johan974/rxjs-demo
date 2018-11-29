import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BasisComponent } from './basis/basis.component';
import { RxStreamComponent } from './rx-stream/rx-stream.component';


@NgModule({
  declarations: [
    AppComponent,
    BasisComponent,
    RxStreamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
