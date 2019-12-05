import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusModifyComponent } from './alumnus-modify.component';

describe('AlumnusModifyComponent', () => {
  let component: AlumnusModifyComponent;
  let fixture: ComponentFixture<AlumnusModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnusModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnusModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
