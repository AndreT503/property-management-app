import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar color="accent">
      <a mat-button routerLink="/manager/home" routerLinkActive="active-link"
        >Manager Dashboard</a
      >
      <a mat-button routerLink="/manager/users" routerLinkActive="active-link"
        >User Management</a
      >
      <a mat-button routerLink="/manager/rents" routerLinkActive="active-link"
        >Rent Lookup</a
      >
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #005005;
      }
    `,
  ],
})
export class ManagerComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
