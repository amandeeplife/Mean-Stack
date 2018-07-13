import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FarmersMarketModule } from './farmers-market/farmers-market.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import { FarmerComponentComponent } from './farmers-market/farmer-component/farmer-component.component';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    AppRoutingModule,
    FarmerComponentComponent
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
