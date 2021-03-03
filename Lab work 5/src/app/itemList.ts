import { Item } from "./item";

export class ItemList{
  static id :number = 0;
  items : Item[] = [];
  isVisible:boolean = false;
  myId : number = 0;
  name : string = '';

  constructor(items:Item[], name:string){
    this.items = [...items];
    this.myId = ItemList.id;
    ItemList.id++;
    this.name = name;
  }

  deleteItem():void{

  }

}
