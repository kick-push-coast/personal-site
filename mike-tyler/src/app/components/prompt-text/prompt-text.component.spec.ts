import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptTextComponent } from './prompt-text.component';

describe('PromptTextComponent', () => {
  let component: PromptTextComponent;
  let fixture: ComponentFixture<PromptTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
