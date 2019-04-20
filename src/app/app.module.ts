import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { PumpComponent } from './pump/pump.component';

@NgModule({
  declarations: [
    AppComponent,
    PumpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
