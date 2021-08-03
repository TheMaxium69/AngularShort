import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import {HttpClientModule} from "@angular/common/http";
import { NewShortComponent } from './new-short/new-short.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NewShortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
