import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTitleComponent } from './column-title.component';

describe('ColumnTitleComponent', () => {
  let component: ColumnTitleComponent;
  let fixture: ComponentFixture<ColumnTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnTitleComponent]
    });
    fixture = TestBed.createComponent(ColumnTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
