import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombaComponent } from './bomba.component';

describe('BombaComponent', () => {
  let component: BombaComponent;
  let fixture: ComponentFixture<BombaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
