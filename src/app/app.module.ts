import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbProgressbarModule, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbProgressbarModule
  ],
  providers: [NgbProgressbarConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
