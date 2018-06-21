import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoAvanzadaComponent } from './resultado-avanzada.component';

describe('ResultadoAvanzadaComponent', () => {
  let component: ResultadoAvanzadaComponent;
  let fixture: ComponentFixture<ResultadoAvanzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoAvanzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
