import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp09Http } from './cmp09-http';

describe('Cmp09Http', () => {
  let component: Cmp09Http;
  let fixture: ComponentFixture<Cmp09Http>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp09Http]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp09Http);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
