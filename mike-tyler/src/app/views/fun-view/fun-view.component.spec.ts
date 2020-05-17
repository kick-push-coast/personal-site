import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunViewComponent } from './fun-view.component';

describe('FunViewComponent', () => {
  let component: FunViewComponent;
  let fixture: ComponentFixture<FunViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
