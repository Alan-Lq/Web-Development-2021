import { Component, Input, Output } from '@angular/core';
import { Item } from './item';
import { ItemList } from './itemList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items1: Item[] = [
    new Item(
      "Hands Free Portable Neck Fan - Rechargeable Mini USB Personal Fan Battery Operated with 3 Level Air Flow, 7 LED Lights for Home Office Travel Indoor Outdoor (Black+Blue)",
      "【Stay COOL Anywhere Anytime】Feeling hot? You need to go outside but also have no hands to hold regular portable fan? Why not always stay cool with this wearable neck fan? You can hang the fan around your neck and take it everywhere, will not feel tired or uncomfortable.Say goodbye to hot flashes, sweating, and flushing.",
    4.7,
    "https://www.amazon.com/Hands-Free-Portable-Neck-Fan/dp/B07WSZ2TM8/ref=sr_1_2?crid=3QVUIIFWTGUCG&dchild=1&keywords=gadgets&qid=1614776811&sprefix=gad%2Caps%2C406&sr=8-2",
    ["https://images-na.ssl-images-amazon.com/images/I/71FFM9Hk%2BdL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71wCUx-FRzL._AC_SL1500_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81OiU6BRscL._AC_SL1500_.jpg"]

    ),
    new Item(
      "3D Illusion Platform Night Lighting Touch Botton 7 Color Change Decor LED Lamp",
      "Powered by universal USB cable which allow you to light up the fantacy light more easily",
      5.0,
      "https://www.amazon.com/Illusion-Platform-Lighting-Botton-Change/dp/B01FJ6ZHA2/ref=sr_1_3?crid=3QVUIIFWTGUCG&dchild=1&keywords=gadgets&qid=1614776811&sprefix=gad%2Caps%2C406&sr=8-3",
      ["https://images-na.ssl-images-amazon.com/images/I/81NLg%2BdL1ZL._AC_SL1200_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81l6fRMd13L._AC_SL1200_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/710nPjvUkgL._AC_SL1200_.jpg"]
    ),
    new Item(
      "12’’ Screen Magnifier for Smartphone – Mobile Phone 3D Magnifier Projector Screen for Movies, Videos, and Gaming",
      "10.15 x 8.93 x 0.66 inches\n",
      4.7,
      "https://www.amazon.com/Screen-Magnifier-Smartphone-Compatible-Smartphones/dp/B07VC383LJ/ref=sr_1_6?crid=3QVUIIFWTGUCG&dchild=1&keywords=gadgets&qid=1614776831&sprefix=gad%2Caps%2C406&sr=8-6",
      ["https://images-na.ssl-images-amazon.com/images/I/713Cu-pRyfL._AC_SL1200_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/61mS86Nu4QL._AC_SL1200_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/713Cu-pRyfL._AC_SL1200_.jpg"]
    ),
    new Item(
      "Simicore Charging Station for Multiple Devices, Certified 6 USB 50W 10A Fast Charging Dock, Non-Slip Surface",
      "All USB-Powered devices from Apple, Samsung, Google, HTC, Nokia, Sony, Blackberry, One Plus, Motorola, LG, Aurora, Priv, Keyone, Echo, Dot, Optimus",
      4.4,
      "https://www.amazon.com/Simicore-Charging-Station-Organizer-Smartphones/dp/B074KT6DL8/ref=sr_1_17?crid=3QVUIIFWTGUCG&dchild=1&keywords=gadgets&qid=1614776831&sprefix=gad%2Caps%2C406&sr=8-17",
      ["https://images-na.ssl-images-amazon.com/images/I/81YacBfRG9L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/915qPBxMYqL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91n7oArkL6L._AC_SL1500_.jpg"]
    ),
    new Item(
      "12\" Thin Foldable Phone Magnifier Screen HD 3D Blu-ray Easy to Carry Gadgets for Men Gifts Technology Movies Phone Projector Compatible All Smartphones",
      "Cozy View Experience--Can magnify the phone screen 2-4 times, perfect for watching movies and reading, which will reduce the discomfort caused by long-term focus on the small screen, suitable for people of different ages",
      3.9,
      "https://www.amazon.com/Magnifier-Technology-Projector-Compatible-Smartphones/dp/B08H1BPYQS/ref=sr_1_45?crid=3QVUIIFWTGUCG&dchild=1&keywords=gadgets&qid=1614776831&sprefix=gad%2Caps%2C406&sr=8-45",
      ["https://images-na.ssl-images-amazon.com/images/I/815B54bvcKL._AC_SL1500_.jpg"]
    )
  ];

  items2:Item[] = [
    new Item(
      "Bedtime Originals Twinkle Toes Pink Elephant Plush, Hazel",
      "Color: Hazel\n" +
      "Polyester\n" +
      "Imported\n" +
      "Machine Washable",
      4.4,
      "https://www.amazon.com/Bedtime-Originals-Twinkle-Elephant-Plush/dp/B0771V1JZX/?_encoding=UTF8&pd_rd_w=gp5Qe&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=1MENM2DXFPFW38Q1W1QB&pd_rd_r=028ea94f-dab7-4677-84fb-c711d388a7c7&pd_rd_wg=DE6jR&ref_=pd_gw_unk",
      ["https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SL1500_.jpg"]
    ),
    new Item(
      "Fortnite 7\" Llama Loot Plush\n",
      "Super-Soft, Huggable Plush for All Ages\n" +
      "High-Quality Materials\n" +
      "Collectible Rare Loot Llama\n" +
      "Official Licensed Product",
      4.7,
      "https://www.amazon.com/Fortnite-7-Llama-Loot-Plush/dp/B07GJ2MWTZ/?_encoding=UTF8&pd_rd_w=gp5Qe&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=1MENM2DXFPFW38Q1W1QB&pd_rd_r=028ea94f-dab7-4677-84fb-c711d388a7c7&pd_rd_wg=DE6jR&ref_=pd_gw_unk",
      ["https://images-na.ssl-images-amazon.com/images/I/71KUNPdl7dL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81MSfieBQzL._AC_SL1500_.jpg"]
    ),
    new Item(
      'WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark',
      'Produced by WowWee for Pinkfong, official creator of the global hit song Baby Shark!\n' +
      'Squeeze to hear 4 verses of the official Baby Shark song (English version)!\n' +
      'Super soft stackable plush!',
      4.3,
      'https://www.amazon.com/WowWee-Pinkfong-Baby-Shark-Official/dp/B07K3JD7RF/?_encoding=UTF8&pd_rd_w=gp5Qe&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=1MENM2DXFPFW38Q1W1QB&pd_rd_r=028ea94f-dab7-4677-84fb-c711d388a7c7&pd_rd_wg=DE6jR&ref_=pd_gw_unk',
      ['https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61L3sCXt9UL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71X5Be5ZB7L._AC_SL1500_.jpg'
        ]
    ),
    new Item(
      'Pomsies Lulu Puppy\n',
      'About this item\n' +
      'Lovable, interactive pom pom pets you can take anywhere!\n' +
      'Soft plush reacts to touch.\n' +
      'Light up eyes communicate how they feel. Over 50 cute sounds!\n' +
      'Twist and lock tail makes the perfect fashion accessory.',
      4.6,
      'https://www.amazon.com/Pomsies-01887-Lulu-Puppy-Toy/dp/B07DL1LGCX/?_encoding=UTF8&pd_rd_w=gp5Qe&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=1MENM2DXFPFW38Q1W1QB&pd_rd_r=028ea94f-dab7-4677-84fb-c711d388a7c7&pd_rd_wg=DE6jR&ref_=pd_gw_unk',
      [
        'https://images-na.ssl-images-amazon.com/images/I/819PJ0EPdkL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81HrB9DEbcL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/81r0Ry7JhHL._AC_SL1500_.jpg'
      ]
    ),
    new Item(
      'Aurora - Precious Moments - 8.5" Sparkle Unicorn',
      'Share the gift of love with this 8.5in tall sparkle unicorn!\n' +
      'Features the signature precious moments teardrop eyes.',
      4.4,
      'https://www.amazon.com/Aurora-World-Inc-Sparkle-Unicorn/dp/B003Y2PIJY/?_encoding=UTF8&pd_rd_w=gp5Qe&pf_rd_p=0a0fec03-b408-45eb-8e57-18d0d31850f9&pf_rd_r=1MENM2DXFPFW38Q1W1QB&pd_rd_r=028ea94f-dab7-4677-84fb-c711d388a7c7&pd_rd_wg=DE6jR&ref_=pd_gw_unk',
      [
        'https://images-na.ssl-images-amazon.com/images/I/71msxzqxUbL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71S6NqZlOKL._AC_SL1500_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/71UdP%2BeS%2BiL._AC_SL1500_.jpg'
      ]
    )
  ];

  itemList1 : ItemList = new ItemList(this.items1,'Gadgets');

  itemLists: ItemList[] = [this.itemList1, new ItemList(this.items2,'Toys')];

  title = 'Lab5';

  showCategory(i:number):void{
    let itemList : ItemList = this.itemLists[i]

    itemList.isVisible = !itemList.isVisible;
    /*if(itemList.isVisible){
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = false;
        }
      }
    }else{
      for(let iL of this.itemLists){
        if(iL.myId != itemList.myId ){
          iL.isVisible = true;
        }
      }
    }*/
  }
}
