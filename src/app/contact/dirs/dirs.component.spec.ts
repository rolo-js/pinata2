import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirsComponent } from './dirs.component';

describe('DirsComponent', () => {
  let component: DirsComponent;
  let fixture: ComponentFixture<DirsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
