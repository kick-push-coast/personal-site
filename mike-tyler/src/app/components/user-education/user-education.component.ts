import { Component, OnInit, Input } from '@angular/core';
import { EducationModel } from 'src/app/stores/current-user/model/user-model';

@Component({
  selector: 'app-user-education',
  templateUrl: './user-education.component.html',
  styleUrls: ['./user-education.component.scss']
})
export class UserEducationComponent implements OnInit {

  @Input() education: EducationModel;

  constructor() { }

  ngOnInit() {
  }

}
