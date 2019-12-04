import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      You have accessed a limbo page. Please return to the
      <a routerLink="/home">home</a> island.
    </p>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
