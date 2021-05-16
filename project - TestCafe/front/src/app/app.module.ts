import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DishComponent} from './dish/dish.component';
import {DishItemComponent} from './dish-item/dish-item.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthInterceptor} from './AuthInterceptor';
import {OrderComponent} from './order/order.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProviderService} from './service/provider.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishComponent,
    DishItemComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    OrderComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
