import {Component, OnInit} from '@angular/core';
import {IOrder} from '../model';
import {ProviderService} from '../service/provider.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
 export class OrderComponent implements OnInit {
  public orders: IOrder[];
  logged = false;

  public empty = true;
  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.getOrders();
    }
  }
finishOrder(){
  alert('Thanks for your order! Expect delivery!');
  this.deleteOrders();
}
  getOrders() {
    this.providerService.getOrders().subscribe(res => {
      this.orders = res;
      console.log(this.orders);
    });
  }

  deleteOrder(order: IOrder) {
    this.orders = this.orders.filter(h => h !== order);
    this.providerService.deleteOrder(order).subscribe(res => { });
  }

  deleteOrders() {
    this.providerService.deleteOrders().subscribe();
    window.location.reload();
  }



}
