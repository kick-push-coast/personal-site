import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { InputClass, InputType } from '../../components/forms/input-types/input-base';
import { SignupUser } from 'src/app/models/signup-user';
import {
    trigger,
    style,
    animate,
    transition
  } from '@angular/animations';

enum signupSteps {
    form,
    success
}

@Component({
    selector: 'app-signup-view',
    templateUrl: './signup-view.component.html',
    styleUrls: ['./signup-view.component.scss'],
    animations: [
      trigger('fadeIn', [
          transition(
              ':enter',
              [
                  style({ opacity: 0 }),
                  animate('400ms ease-in',
                        style({ opacity: 1 }))
              ]
          )
      ])
    ]
})
export class SignupViewComponent implements OnInit {

    formInputs: InputClass<string>[] = [];
    loading: boolean;
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
        this.loading = true;
        this.signupUser = {
            firstName: model.value.firstName,
            email: model.value.emailAddress,
            password: model.value.password
        };
        // Emulating sending off user payload to server and awaiting success
        setTimeout(() => {
            this.signupStep = signupSteps.success;
            this.loading = false;
        }, 3000);
    }

}
