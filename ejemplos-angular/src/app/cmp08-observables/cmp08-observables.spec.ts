import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp08Observables } from './cmp08-observables';

describe('Cmp08Observables', () => {
  let component: Cmp08Observables;
  let fixture: ComponentFixture<Cmp08Observables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp08Observables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp08Observables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
