import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CarCatalogueComponent } from './car-catalogue/car-catalogue.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarDisplayComponent } from './car-display/car-display.component';
import { carsCatalogueFeature } from './store/car-catalogoue.reducer';
import { UiModule } from '@shared/ui/ui.module';

@NgModule({
  declarations: [CarCatalogueComponent, CarFormComponent, CarDisplayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(carsCatalogueFeature),
    UiModule,
  ],
  exports: [CarCatalogueComponent],
})
export class CarCatalogueModule {}
