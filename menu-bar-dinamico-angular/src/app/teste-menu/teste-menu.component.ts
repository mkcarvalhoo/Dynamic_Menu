import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../shared/menu';

@Component({
  selector: 'app-teste-menu',
  templateUrl: './teste-menu.component.html',
  styleUrls: ['./teste-menu.component.css']
})
export class TesteMenuComponent implements OnInit {

  public itensMenu : any [];
  
  constructor() { }

  ngOnInit() {
    
      this.itensMenu = new MenuItem().getItens2();
    
  }

}
