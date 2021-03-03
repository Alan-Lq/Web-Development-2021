import { Component, Input, OnInit } from '@angular/core';
import { ItemList } from '../itemList';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() itemList!: ItemList;


  //itemList : ItemList = new ItemList(this.items);
  constructor() { }

  ngOnInit(): void {

  }

}
