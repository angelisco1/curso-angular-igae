import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSugus } from './card-sugus';

describe('CardSugus', () => {
  let component: CardSugus;
  let fixture: ComponentFixture<CardSugus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardSugus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSugus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
