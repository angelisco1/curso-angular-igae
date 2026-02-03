import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02Pipes } from './cmp02-pipes';

describe('Cmp02Pipes', () => {
  let component: Cmp02Pipes;
  let fixture: ComponentFixture<Cmp02Pipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp02Pipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp02Pipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
