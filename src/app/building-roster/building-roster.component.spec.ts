import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingRosterComponent } from './building-roster.component';

describe('BuildingRosterComponent', () => {
  let component: BuildingRosterComponent;
  let fixture: ComponentFixture<BuildingRosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingRosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
