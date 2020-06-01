import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputClass, InputType } from '../input-types/input-base';

@Component({
    selector: 'app-public-form',
    templateUrl: './public-form.component.html',
    styleUrls: ['./public-form.component.scss']
})
export class PublicFormComponent implements OnInit {

    @Input() formInputs: InputClass<string>[];
    @Input() loading: boolean;
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
            const validators = [];
            if (input.required) {
                validators.push(Validators.required);
            }
            if (input.type === InputType.email) {
                validators.push(Validators.email);
            }
            if (input.type === InputType.password) {
                validators.push(Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'));
            }
            group[input.key] = new FormControl(input.value || '', validators);
        });
        return new FormGroup(group);
    }

}
