import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExecutionComponent } from './details-execution.component';

describe('DetailsExecutionComponent', () => {
  let component: DetailsExecutionComponent;
  let fixture: ComponentFixture<DetailsExecutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsExecutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsExecutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
