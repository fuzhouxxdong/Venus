import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementActivitiesComponent } from './management-activities.component';

describe('ManagementActivitiesComponent', () => {
  let component: ManagementActivitiesComponent;
  let fixture: ComponentFixture<ManagementActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
