import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03Signals } from './cmp03-signals';

describe('Cmp03Signals', () => {
  let component: Cmp03Signals;
  let fixture: ComponentFixture<Cmp03Signals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp03Signals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp03Signals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
