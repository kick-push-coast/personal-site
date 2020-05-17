import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { UserModel } from 'src/app/stores/current-user/model/user-model';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit, AfterViewInit {

  @Input() user: UserModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.querySelector('html').style.display = 'block';
    const introCenter: HTMLElement = document.querySelector('.block--intro__center-inside');
    if (introCenter) {
        introCenter.style.display = 'inline-block';
    }
  }

}
