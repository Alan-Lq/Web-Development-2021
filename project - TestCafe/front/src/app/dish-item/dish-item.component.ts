import {Component, OnInit} from '@angular/core';
import {IDish, IOrder} from '../model';
import {ProviderService} from '../service/provider.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
  dish: IDish;
  order: IOrder[] = [];
  logged = false;
  public users = localStorage.getItem('users');
  constructor(private providerService: ProviderService,
              private route: ActivatedRoute,
              private location: Location)
  { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    this.getDish();

  }

  getDish(): void {
    const dishid = +this.route.snapshot.paramMap.get('dishId');
    this.providerService.getDish(dishid).subscribe(dish => {this.dish = dish; console.log(this.dish); } );

  }
  back(): void {
    this.location.back();
  }

  postOrder(name: string, count: number, imageUrl: string, price: number): void {
    count = this.dish.count;
     this.providerService.postOrder({name, count, imageUrl, price} as IDish)
      .subscribe(dish =>  {
        this.order.push(dish);});
    window.alert('Your product has been added to the cart!');
  }
}
