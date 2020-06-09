import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatoryCoverageComponent } from './regulatory-coverage.component';

describe('RegulatoryCoverageComponent', () => {
  let component: RegulatoryCoverageComponent;
  let fixture: ComponentFixture<RegulatoryCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatoryCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatoryCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
