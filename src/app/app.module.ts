import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CarCatalogueModule } from '@car-catalogue/car-catalogue.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CarCatalogueModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
