import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBox } from './service-box';

describe('ServiceBox', () => {
  let component: ServiceBox;
  let fixture: ComponentFixture<ServiceBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
