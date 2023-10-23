import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCatalogueComponent } from './car-catalogue/car-catalogue.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDisplayComponent } from './car-display/car-display.component';

@NgModule({
  declarations: [CarCatalogueComponent, CarFormComponent, CarDisplayComponent],
  imports: [CommonModule],
  exports: [CarCatalogueComponent],
})
export class CarCatalogueModule {}
