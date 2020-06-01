import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputClass } from '../input-types/input-base';

@Component({
    selector: 'app-public-form',
    templateUrl: './public-form.component.html',
    styleUrls: ['./public-form.component.scss']
})
export class PublicFormComponent implements OnInit {

    @Input() formInputs: InputClass<string>[];
    @Output() formSubmit: EventEmitter<FormGroup> =  new EventEmitter<FormGroup>();

    formModel: FormGroup;

    constructor() { }

    ngOnInit() {
        this.formModel = this.toFormGroup(this.formInputs);
    }

    submit() {
        if (this.formModel.valid) {
            this.formSubmit.emit(this.formModel);
        }
    }

    toFormGroup(inputs: InputClass<string>[] ) {
        const group: any = {};

        inputs.forEach(input => {
        group[input.key] = input.required ?
                                new FormControl(input.value || '', Validators.required) :
                                new FormControl(input.value || '');
        });
        return new FormGroup(group);
    }

}
