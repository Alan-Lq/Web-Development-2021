import {Component, OnInit} from '@angular/core';
import {IMenu} from '../model';
import {ProviderService} from '../service/provider.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: IMenu[] = [];

  constructor(private providerService: ProviderService) { }

  getMenu(): void {
    this.providerService.getMenu().subscribe(menu => {
      this.menu = menu;
    } );
  }

  ngOnInit(): void {
    this.getMenu();
  }

}
