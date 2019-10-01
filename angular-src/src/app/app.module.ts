import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserNavComponent } from "./components/user-nav/user-nav.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserNavComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
