import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPicAnim } from './two-pic-anim';

describe('TwoPicAnim', () => {
  let component: TwoPicAnim;
  let fixture: ComponentFixture<TwoPicAnim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoPicAnim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoPicAnim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
