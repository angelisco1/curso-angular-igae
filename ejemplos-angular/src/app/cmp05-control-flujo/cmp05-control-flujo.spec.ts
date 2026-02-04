import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05ControlFlujo } from './cmp05-control-flujo';

describe('Cmp05ControlFlujo', () => {
  let component: Cmp05ControlFlujo;
  let fixture: ComponentFixture<Cmp05ControlFlujo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp05ControlFlujo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp05ControlFlujo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
