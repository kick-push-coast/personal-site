import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { InputClass, InputType } from '../../components/forms/input-types/input-base';

@Component({
    selector: 'app-signup-view',
    templateUrl: './signup-view.component.html',
    styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit {

    formInputs: InputClass<string>[] = [];
    signupModel: FormGroup;

    constructor() { }

    ngOnInit() {
        this.formInputs = [
            new InputClass({
                key: 'firstName',
                label: 'First Name',
                value: '',
                required: true,
                type: InputType.text
            }),
            new InputClass({
                key: 'emailAddress',
                label: 'Email Adress',
                value: '',
                required: true,
                type: InputType.email
            }),
            new InputClass({
                key: 'password',
                label: 'Password',
                value: '',
                required: true,
                type: InputType.password
            })
        ];
        this.signupModel = this.toFormGroup(this.formInputs);
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
