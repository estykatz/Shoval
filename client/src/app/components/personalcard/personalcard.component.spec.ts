import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalcardComponent } from './personalcard.component';

describe('PersonalcardComponent', () => {
  let component: PersonalcardComponent;
  let fixture: ComponentFixture<PersonalcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
