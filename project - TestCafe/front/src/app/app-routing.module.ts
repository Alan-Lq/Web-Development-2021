import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishComponent} from './dish/dish.component';
import {DishItemComponent} from './dish-item/dish-item.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'menu/:id/dishes', component: DishComponent},
  { path: 'dishes/:dishId', component: DishItemComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
