import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { ItemList } from '../itemList';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() items: Item[] = [];


  constructor() { }

  ngOnInit(): void {

  }

  onTaskRemove(index:number){
    this.items.splice(index,1)
  }

}
