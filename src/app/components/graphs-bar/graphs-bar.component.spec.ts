import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphsBarComponent } from './graphs-bar.component';

describe('GraphsBarComponent', () => {
  let component: GraphsBarComponent;
  let fixture: ComponentFixture<GraphsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
