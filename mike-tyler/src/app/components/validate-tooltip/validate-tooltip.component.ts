import { Component, OnInit } from '@angular/core';
import {
    trigger,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
  selector: 'app-validate-tooltip',
  templateUrl: './validate-tooltip.component.html',
  styleUrls: ['./validate-tooltip.component.scss'],
  animations: [
    trigger('fadeIn', [
        transition(
            ':enter',
            [
                style({ opacity: 0, transform: 'translate(10px, -50%)' }),
                animate('200ms 200ms ease-in',
                      style({ opacity: 1, transform: 'translate(0, -50%)' }))
            ]
        )
    ])
  ]
})
export class ValidateTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
