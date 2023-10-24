import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
})
export class ValidationErrorComponent {
  @Input() additional: string = '';
}
