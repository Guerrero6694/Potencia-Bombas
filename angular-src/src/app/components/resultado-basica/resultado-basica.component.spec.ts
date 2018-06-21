import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBasicaComponent } from './resultado-basica.component';

describe('ResultadoBasicaComponent', () => {
  let component: ResultadoBasicaComponent;
  let fixture: ComponentFixture<ResultadoBasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
