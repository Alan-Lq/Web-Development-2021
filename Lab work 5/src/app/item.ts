export class Item{
  static id:number = 0;
  myId :number = 0;
  name:string | undefined;
  description:string | undefined;
  rating:number = 0;
  link:string | undefined;
  imgs: string[] = [];
  imgCount:number = 0;
  initLikes:number = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  likes :number = this.initLikes;
  isDisabledButton:boolean = false;

  constructor(name:string,description:string,rating:number,
  link:string,imgs:string[]){
    this.name = name;
    this.description = description;
    this.rating = rating;
    this.link = link;
    this.imgs = [...imgs]
    this.myId = Item.id;
    Item.id++;

  }

}
