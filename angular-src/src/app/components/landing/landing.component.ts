import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  products: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getProducts().subscribe(
      (prod: any) => {
        let arr = [];
        for (const key in prod) {
          const element = prod[key];
          arr.push(element);
        }
        this.products = arr;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }

  getProducts = () => {
    return this.products;
  };
}
