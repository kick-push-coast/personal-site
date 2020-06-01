import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptHeaderComponent } from './prompt-header.component';

describe('PromptHeaderComponent', () => {
  let component: PromptHeaderComponent;
  let fixture: ComponentFixture<PromptHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
