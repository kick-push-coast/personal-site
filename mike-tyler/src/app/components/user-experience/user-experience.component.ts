import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ExperienceModel } from 'src/app/stores/current-user/model/user-model';
import { Technologies } from 'src/app/enums/technologies';

@Component({
  selector: 'app-user-experience',
  templateUrl: './user-experience.component.html',
  styleUrls: ['./user-experience.component.scss']
})
export class UserExperienceComponent implements OnInit {

  @Input() experience: ExperienceModel;
  @Output() technologyClicked = new EventEmitter<Technologies>();

  constructor() { }

  ngOnInit() {
  }

  techClicked(tech: Technologies) {
    this.technologyClicked.emit(tech);
  }

}
