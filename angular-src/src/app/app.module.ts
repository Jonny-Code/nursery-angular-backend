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
import { AuthGuard } from "./guards/auth.guard";
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    UserNavComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule
  ],
  providers: [ValidateService, FlashMessagesService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
