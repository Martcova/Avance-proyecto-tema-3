import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblArticulosComponent } from './tbl-articulos.component';

describe('TblArticulosComponent', () => {
  let component: TblArticulosComponent;
  let fixture: ComponentFixture<TblArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
