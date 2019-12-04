import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RentLookupComponent } from './rent-lookup.component'

describe('RentLookupComponent', () => {
  let component: RentLookupComponent
  let fixture: ComponentFixture<RentLookupComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RentLookupComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RentLookupComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
