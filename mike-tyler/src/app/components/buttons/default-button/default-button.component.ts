import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-default-button',
    templateUrl: './default-button.component.html',
    styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {

    @Input() type: string;
    @Input() disabled: boolean;
    @Input() loading: boolean;

    constructor() { }

    ngOnInit() {
    }

}
