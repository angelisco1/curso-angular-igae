import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06Formularios } from './cmp06-formularios';

describe('Cmp06Formularios', () => {
  let component: Cmp06Formularios;
  let fixture: ComponentFixture<Cmp06Formularios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp06Formularios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp06Formularios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
