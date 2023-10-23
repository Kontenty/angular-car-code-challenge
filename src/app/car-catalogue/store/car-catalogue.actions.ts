import { createActionGroup, props } from '@ngrx/store';

export const CarCatalogoueActions = createActionGroup({
  source: 'Car catalogue',
  events: {
    'set car type': props<{ carType: string }>(),
  },
});

export const { setCarType } = CarCatalogoueActions;
