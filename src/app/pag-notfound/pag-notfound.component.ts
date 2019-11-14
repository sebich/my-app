import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-notfound',
  template: `
    <h3>
      Page 404, la page que vous rechercher n'existe pas !
    </h3>
  `,
  styles: []
})
export class PagNotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
