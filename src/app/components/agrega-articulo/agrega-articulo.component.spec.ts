import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaArticuloComponent } from './agrega-articulo.component';

describe('AgregaArticuloComponent', () => {
  let component: AgregaArticuloComponent;
  let fixture: ComponentFixture<AgregaArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
