import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratioComponent } from './registratio.component';

describe('RegistratioComponent', () => {
  let component: RegistratioComponent;
  let fixture: ComponentFixture<RegistratioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
