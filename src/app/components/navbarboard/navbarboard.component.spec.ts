import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarboardComponent } from './navbarboard.component';

describe('NavbarboardComponent', () => {
  let component: NavbarboardComponent;
  let fixture: ComponentFixture<NavbarboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
