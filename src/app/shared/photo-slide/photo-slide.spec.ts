import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSlide } from './photo-slide';

describe('PhotoSlide', () => {
  let component: PhotoSlide;
  let fixture: ComponentFixture<PhotoSlide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoSlide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoSlide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
