import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorOpcionVentaComponent } from './mejor-opcion-venta.component';

describe('MejorOpcionVentaComponent', () => {
  let component: MejorOpcionVentaComponent;
  let fixture: ComponentFixture<MejorOpcionVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejorOpcionVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorOpcionVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
