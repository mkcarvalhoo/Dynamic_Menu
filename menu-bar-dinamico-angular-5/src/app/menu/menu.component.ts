import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from '../../shared/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() public itensMenu : any [];
  public active: boolean = true;


  constructor() { }

  ngOnInit() {
    console.log(this.itensMenu);
  }

  public itemAtivo(item : any){
    item.active = 'active';
  }

}
