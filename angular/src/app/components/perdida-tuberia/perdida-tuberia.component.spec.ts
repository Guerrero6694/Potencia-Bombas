import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdidaTuberiaComponent } from './perdida-tuberia.component';

describe('PerdidaTuberiaComponent', () => {
  let component: PerdidaTuberiaComponent;
  let fixture: ComponentFixture<PerdidaTuberiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdidaTuberiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidaTuberiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
