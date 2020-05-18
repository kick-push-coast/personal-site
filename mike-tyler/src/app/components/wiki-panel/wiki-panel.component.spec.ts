import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiPanelComponent } from './wiki-panel.component';

describe('WikiPanelComponent', () => {
  let component: WikiPanelComponent;
  let fixture: ComponentFixture<WikiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
