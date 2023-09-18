import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBtnComponent } from './card-btn.component';

describe('CardBtnComponent', () => {
  let component: CardBtnComponent;
  let fixture: ComponentFixture<CardBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBtnComponent]
    });
    fixture = TestBed.createComponent(CardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
