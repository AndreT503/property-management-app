import { Component, OnInit, ViewChild } from '@angular/core'
import { MatIconRegistry, MatSidenav } from '@angular/material'

import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'property-management-app'

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'tcicon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/tcicon.svg')
    )
  }
}
