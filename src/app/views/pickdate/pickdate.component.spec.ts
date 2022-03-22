import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickdateComponent } from './pickdate.component';

describe('PickdateComponent', () => {
  let component: PickdateComponent;
  let fixture: ComponentFixture<PickdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
