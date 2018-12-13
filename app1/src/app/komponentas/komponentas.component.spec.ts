import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponentasComponent } from './komponentas.component';

describe('KomponentasComponent', () => {
  let component: KomponentasComponent;
  let fixture: ComponentFixture<KomponentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomponentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
