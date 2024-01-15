import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotusPageComponent } from './motus-page.component';

describe('MotusPageComponent', () => {
  let component: MotusPageComponent;
  let fixture: ComponentFixture<MotusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotusPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
