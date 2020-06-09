import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDesignComponent } from './details-design.component';

describe('DetailsDesignComponent', () => {
  let component: DetailsDesignComponent;
  let fixture: ComponentFixture<DetailsDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
