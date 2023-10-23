import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCatalogueComponent } from './car-catalogue.component';

describe('CarCatalogueComponent', () => {
  let component: CarCatalogueComponent;
  let fixture: ComponentFixture<CarCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
