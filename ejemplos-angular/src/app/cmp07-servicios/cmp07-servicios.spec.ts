import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07Servicios } from './cmp07-servicios';

describe('Cmp07Servicios', () => {
  let component: Cmp07Servicios;
  let fixture: ComponentFixture<Cmp07Servicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp07Servicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp07Servicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
