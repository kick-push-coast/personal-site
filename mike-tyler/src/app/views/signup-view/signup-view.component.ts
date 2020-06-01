import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { InputClass, InputType } from '../../components/forms/input-types/input-base';
import { SignupUser } from 'src/app/models/signup-user';

enum signupSteps {
    form,
    success
}

@Component({
    selector: 'app-signup-view',
    templateUrl: './signup-view.component.html',
    styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit {

    formInputs: InputClass<string>[] = [];
    signupStep = signupSteps.form;
    signupUser: SignupUser;

    signupSteps = signupSteps;

    constructor() { }

    ngOnInit() {
        this.formInputs = [
            new InputClass({
                key: 'firstName',
                label: 'First name',
                value: '',
                required: true,
                type: InputType.text
            }),
            new InputClass({
                key: 'emailAddress',
                label: 'Email address',
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
    }

    submit(model: FormGroup) {
        this.signupUser = {
            firstName: model.value.firstName,
            email: model.value.emailAddress,
            password: model.value.password
        };
        // Send off user payload to server and await success
        this.signupStep = signupSteps.success;
    }

}
