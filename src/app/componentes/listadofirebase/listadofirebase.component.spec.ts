import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadofirebaseComponent } from './listadofirebase.component';

describe('ListadofirebaseComponent', () => {
  let component: ListadofirebaseComponent;
  let fixture: ComponentFixture<ListadofirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadofirebaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadofirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
