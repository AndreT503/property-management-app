import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="column" fxLayoutAlign="center center">
      <span class="mat-display-2">Please Enter Your Credentials </span><br />
      <mat-form-field>
        <input matInput placeholder="User Name" aria-label="Please enter user name" />
        <input matInput placeholder="Password" aria-label="Please enter password" />
      </mat-form-field>
      <mat-form-field>
        <input matInput placeholder="Password" aria-label="Please enter password" />
      </mat-form-field>
      <button mat-raised-button color="primary" routerLink="/manager">Login</button>
    </div>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  displayLogin = true
  constructor() {}

  ngOnInit() {}
}
