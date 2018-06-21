import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdidaAccesorioComponent } from './perdida-accesorio.component';

describe('PerdidaAccesorioComponent', () => {
  let component: PerdidaAccesorioComponent;
  let fixture: ComponentFixture<PerdidaAccesorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerdidaAccesorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidaAccesorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
