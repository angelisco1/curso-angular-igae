import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sugus } from './sugus';

describe('Sugus', () => {
  let component: Sugus;
  let fixture: ComponentFixture<Sugus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sugus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sugus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
