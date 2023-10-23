import { createFeature, createReducer, on } from '@ngrx/store';

import { CarCatalogoueActions } from './car-catalogue.actions';

interface State {
  carType: string;
}

const initialState: State = {
  carType: '',
};

export const carsCatalogueFeature = createFeature({
  name: 'carsCatalogue',
  reducer: createReducer(
    initialState,
    on(CarCatalogoueActions.setCarType, (state, { carType }) => ({
      ...state,
      carType,
    }))
  ),
});

export const { name, selectCarType } = carsCatalogueFeature;
