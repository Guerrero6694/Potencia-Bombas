import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAvanzadaComponent } from './navbar-avanzada.component';

describe('NavbarAvanzadaComponent', () => {
  let component: NavbarAvanzadaComponent;
  let fixture: ComponentFixture<NavbarAvanzadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarAvanzadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
