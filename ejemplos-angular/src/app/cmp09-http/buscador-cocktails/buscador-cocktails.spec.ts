import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorCocktails } from './buscador-cocktails';

describe('BuscadorCocktails', () => {
  let component: BuscadorCocktails;
  let fixture: ComponentFixture<BuscadorCocktails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorCocktails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorCocktails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
