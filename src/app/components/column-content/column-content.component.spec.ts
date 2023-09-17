import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnContentComponent } from './column-content.component';

describe('ColumnContentComponent', () => {
  let component: ColumnContentComponent;
  let fixture: ComponentFixture<ColumnContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColumnContentComponent]
    });
    fixture = TestBed.createComponent(ColumnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
