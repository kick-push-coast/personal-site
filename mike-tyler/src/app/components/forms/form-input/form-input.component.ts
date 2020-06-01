import { Component, OnInit, Input } from '@angular/core';
import { InputClass, InputType } from '../input-types/input-base';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

    @Input() inputModel: InputClass<string>;
    @Input() form: FormGroup;

    inputFocused: boolean;

    InputType = InputType;

    get isValid() {
        return this.form.controls[this.inputModel.key].valid;
    }

    get isTouched() {
        return this.form.controls[this.inputModel.key].touched;
    }

    get errors() {
        return this.form.controls[this.inputModel.key].errors;
    }

    get showTooltip() {
        return this.inputFocused && this.inputModel.type === InputType.password && !this.isValid;
    }

}
