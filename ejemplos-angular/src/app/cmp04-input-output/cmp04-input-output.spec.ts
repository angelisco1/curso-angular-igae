import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04InputOutput } from './cmp04-input-output';

describe('Cmp04InputOutput', () => {
  let component: Cmp04InputOutput;
  let fixture: ComponentFixture<Cmp04InputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cmp04InputOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cmp04InputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
