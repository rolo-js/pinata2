import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecientesComponent } from './recientes.component';

describe('RecientesComponent', () => {
  let component: RecientesComponent;
  let fixture: ComponentFixture<RecientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
