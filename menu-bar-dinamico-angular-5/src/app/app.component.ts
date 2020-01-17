import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  public itensMenu: any[];

  constructor() {
    this.itensMenu = new MenuItem().getItens();
  }

}
