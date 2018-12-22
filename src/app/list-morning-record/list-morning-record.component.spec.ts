import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMorningRecordComponent } from './list-morning-record.component';

describe('ListMorningRecordComponent', () => {
  let component: ListMorningRecordComponent;
  let fixture: ComponentFixture<ListMorningRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMorningRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMorningRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
