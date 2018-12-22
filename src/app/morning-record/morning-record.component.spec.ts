import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningRecordComponent } from './morning-record.component';

describe('MorningRecordComponent', () => {
  let component: MorningRecordComponent;
  let fixture: ComponentFixture<MorningRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorningRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
