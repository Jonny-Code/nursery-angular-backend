import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { LandingComponent } from "./components/landing/landing.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
  { path: "checkout", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
