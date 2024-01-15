import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBlueBoardComponent } from './cell-blue-board.component';

describe('CellBlueBoardComponent', () => {
  let component: CellBlueBoardComponent;
  let fixture: ComponentFixture<CellBlueBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellBlueBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellBlueBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
