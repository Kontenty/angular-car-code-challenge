import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { kentekenValidator } from '@car-catalogue/tools/validator';
import { setCarType } from '@car-catalogue/store/car-catalogue.actions';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent {
  carForm = this.formBuilder.nonNullable.group({
    type: '',
    subType: '',
    licensePlate: [
      '',
      {
        validators: [Validators.required, kentekenValidator()],
        updateOn: 'blur',
      },
    ],
  });

  carOptions = [
    { id: 'hatchback', name: 'Hatchback' },
    { id: 'sedan', name: 'Sedan' },
    { id: 'station', name: 'Station' },
    { id: 'cabriolet', name: 'Cabriolet' },
    { id: 'coupe', name: 'Coupé' },
    { id: 'mvp', name: 'Multi Purpose Vehicle (MVP)' },
    { id: 'terreinauto', name: 'Terreinauto' },
  ];

  motorOptions = [
    { id: 'allroad', name: 'All-road' },
    { id: 'naked', name: 'Naked' },
    { id: 'enduro', name: 'Enduro' },
    { id: 'race', name: 'Race' },
    { id: 'toermotor', name: 'Toermotor' },
    { id: 'chopper', name: 'Chopper' },
    { id: 'zijspan', name: 'Zijspan' },
  ];

  constructor(private formBuilder: FormBuilder, private store: Store) {}

  getSubTypeOptions() {
    const subTypeOptions: Record<string, { id: string; name: string }[]> = {
      auto: this.carOptions,
      motor: this.motorOptions,
      scooter: [],
    };
    return this.carForm.value?.type
      ? subTypeOptions[this.carForm.value.type]
      : [];
  }

  handleVehicleChange() {
    this.carForm.patchValue({ subType: '' });
    this.store.dispatch(setCarType({ carType: this.carForm.value.type ?? '' }));
  }

  hasError(ctrlName: string, errorName: string) {
    const control = this.carForm.get(ctrlName);
    return control?.invalid && control.errors?.[errorName] !== undefined;
  }
}
