import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaglogExampleComponent } from './diaglog-example.component';

describe('DiaglogExampleComponent', () => {
  let component: DiaglogExampleComponent;
  let fixture: ComponentFixture<DiaglogExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaglogExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaglogExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
