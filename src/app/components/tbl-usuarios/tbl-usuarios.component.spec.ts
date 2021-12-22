import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblUsuariosComponent } from './tbl-usuarios.component';

describe('TblUsuariosComponent', () => {
  let component: TblUsuariosComponent;
  let fixture: ComponentFixture<TblUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TblUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
