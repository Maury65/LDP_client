import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProgettiComponent } from './lista-progetti.component';

describe('ListaProgettiComponent', () => {
  let component: ListaProgettiComponent;
  let fixture: ComponentFixture<ListaProgettiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProgettiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
