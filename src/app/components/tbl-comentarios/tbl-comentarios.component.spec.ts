import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblComentariosComponent } from './tbl-comentarios.component';

describe('TblComentariosComponent', () => {
  let component: TblComentariosComponent;
  let fixture: ComponentFixture<TblComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
