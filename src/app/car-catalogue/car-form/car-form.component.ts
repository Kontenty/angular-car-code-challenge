import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent {
  carForm = this.formBuilder.group({
    type: '',
    subType: '',
    licensePlate: '',
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

  constructor(private formBuilder: FormBuilder) {}

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
  }
}
