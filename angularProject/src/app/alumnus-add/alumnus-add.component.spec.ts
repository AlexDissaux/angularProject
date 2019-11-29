import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusAddComponent } from './alumnus-add.component';

describe('AlumnusAddComponent', () => {
  let component: AlumnusAddComponent;
  let fixture: ComponentFixture<AlumnusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
