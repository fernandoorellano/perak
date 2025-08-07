import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadopagoComponent } from './listadopago.component';

describe('ListadopagoComponent', () => {
  let component: ListadopagoComponent;
  let fixture: ComponentFixture<ListadopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadopagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
