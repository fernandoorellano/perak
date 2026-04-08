import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoabonadosComponent } from './infoabonados.component';

describe('InfoabonadosComponent', () => {
  let component: InfoabonadosComponent;
  let fixture: ComponentFixture<InfoabonadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoabonadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoabonadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
