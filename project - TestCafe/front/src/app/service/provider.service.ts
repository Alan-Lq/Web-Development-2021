import {Injectable} from '@angular/core';
import {IDish, IMenu, IOrder,  LoginResponse} from '../model';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  private menuUrl = 'http://127.0.0.1:8000/api/menu/';

  postUser(login: any, pass: any, name: any, nEmail: any): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://127.0.0.1:8000/api/register/', {
      username: login,
      password: pass,
      first_name: name,
      email: nEmail
    }, this.httpOptions);
  }


  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`http://127.0.0.1:8000/api/login/`, {
      username,
      password
    });
  }


  getMenu(): Observable<IMenu[]> {
    const url = this.menuUrl;

    return this.http.get<IMenu[]>(url);

  }
  getDishes(menuId: number): Observable<IDish[]> {
    const url = `http://127.0.0.1:8000/api/menu/${menuId}/dishes/`;
    console.log(url);
    console.log(this.http.get(url));
    return this.http.get<IDish[]>(url);
  }

  getDish(dishId: number): Observable<IDish> {
    const url = `http://127.0.0.1:8000/api/dishes/${dishId}/`;
    return this.http.get<IDish>(url);
  }



  getOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://127.0.0.1:8000/api/orders/');
  }

  postOrder(dish: IDish): Observable<IOrder> {
    return this.http.post<IOrder>('http://127.0.0.1:8000/api/orders/', dish, this.httpOptions);
  }


  deleteOrder(order: IOrder | number): Observable<IOrder> {
    const id = typeof order === 'number' ? order : order.id;
    return this.http.delete<IOrder>(`http://127.0.0.1:8000/api/orders/${id}`, this.httpOptions);

  }
  deleteOrders(): Observable<IOrder[]> {
    return this.http.delete<IOrder[]>('http://127.0.0.1:8000/api/orders/', this.httpOptions);

  }
}
