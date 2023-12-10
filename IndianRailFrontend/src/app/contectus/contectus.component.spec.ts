import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectusComponent } from './contectus.component';

describe('ContectusComponent', () => {
  let component: ContectusComponent;
  let fixture: ComponentFixture<ContectusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContectusComponent]
    });
    fixture = TestBed.createComponent(ContectusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
