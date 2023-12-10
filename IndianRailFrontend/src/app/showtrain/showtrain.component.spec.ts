import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtrainComponent } from './showtrain.component';

describe('ShowtrainComponent', () => {
  let component: ShowtrainComponent;
  let fixture: ComponentFixture<ShowtrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowtrainComponent]
    });
    fixture = TestBed.createComponent(ShowtrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
