import {
  DomSanitizerFake,
  MatIconRegistryFake,
  ObservableMediaFake,
  commonTestingModules,
  commonTestingProviders,
} from './common/common.testing'
import { TestBed, async } from '@angular/core/testing'

import { AppComponent } from './app.component'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { MediaObserver } from '@angular/flex-layout'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat([
        { provide: MediaObserver, useClass: ObservableMediaFake },
        { provide: MatIconRegistry, useClass: MatIconRegistryFake },
        { provide: DomSanitizer, useClass: DomSanitizerFake },
      ]),
      declarations: [AppComponent],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'property-management-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('property-management-app')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('.content span').textContent).toContain(
      'property-management-app app is running!'
    )
  })
})
