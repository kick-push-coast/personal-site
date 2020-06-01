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
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('200ms 200ms ease-in',
                      style({ opacity: 1, transform: 'translateY(0)' }))
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
