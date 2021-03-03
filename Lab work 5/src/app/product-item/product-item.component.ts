import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item';
import { ItemList } from '../itemList';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  item!: Item;

  @Output() remove = new  EventEmitter();





  goBack(): void{
    if (this.item){
      if (this.item.imgs.length > 1){
        if (this.item.imgCount == 1 || this.item.imgCount == 2){
          this.item.imgCount--;
        }else if (this.item.imgCount == 0){
          this.item.imgCount = 2;
        }
      }
    }
  }

  goForward(): void{
    if (this.item){
      if (this.item.imgs.length > 1){
        if (this.item.imgCount == 0 || this.item.imgCount == 1){
          this.item.imgCount++;
        }else if (this.item.imgCount == 2){
          this.item.imgCount = 0;
        }
      }
    }

  }

  deleteItem(id: number): void{
    this.remove.emit(id);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
