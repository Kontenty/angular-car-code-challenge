import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectCarType } from '@car-catalogue/store/car-catalogoue.reducer';

@Component({
  selector: 'app-car-display',
  templateUrl: './car-display.component.html',
  styleUrls: ['./car-display.component.css'],
})
export class CarDisplayComponent implements OnInit {
  carType$ = this.store.select(selectCarType);

  imageDict: Record<string, string> = {
    auto: './assets/auto.jpg',
    motor: './assets/motor.jpg',
    scooter: './assets/scooter.jpg',
  };

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
