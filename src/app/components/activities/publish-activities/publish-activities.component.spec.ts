import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishActivitiesComponent } from './publish-activities.component';

describe('PublishActivitiesComponent', () => {
  let component: PublishActivitiesComponent;
  let fixture: ComponentFixture<PublishActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
