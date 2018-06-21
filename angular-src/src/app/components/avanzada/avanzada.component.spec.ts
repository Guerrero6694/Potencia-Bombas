import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanzadaComponent } from './avanzada.component';

describe('AvanzadaComponent', () => {
  let component: AvanzadaComponent;
  let fixture: ComponentFixture<AvanzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
