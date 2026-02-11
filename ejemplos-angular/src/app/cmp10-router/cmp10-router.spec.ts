import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp10Router } from './cmp10-router';

describe('Cmp10Router', () => {
  let component: Cmp10Router;
  let fixture: ComponentFixture<Cmp10Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp10Router]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp10Router);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
