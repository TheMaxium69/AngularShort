import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ShopComponent} from "./shop/shop.component";
import {NewShortComponent} from "./new-short/new-short.component";

const routes: Routes = [
  {path: 'shop', component: ShopComponent },
  {path: 'new', component: NewShortComponent },
  {path: '', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
