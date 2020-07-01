import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTasksTableComponent } from './editable-tasks-table.component';

describe('EditableTasksTableComponent', () => {
  let component: EditableTasksTableComponent;
  let fixture: ComponentFixture<EditableTasksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTasksTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTasksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
