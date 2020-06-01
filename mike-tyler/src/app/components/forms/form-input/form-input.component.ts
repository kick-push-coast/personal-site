import { Component, OnInit, Input } from '@angular/core';
import { InputClass } from '../input-types/input-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

  @Input() inputModel: InputClass<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.inputModel.key].valid; }

  get isTouched() { return this.form.controls[this.inputModel.key].touched; }

}
