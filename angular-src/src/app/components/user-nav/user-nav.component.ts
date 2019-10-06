import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-nav",
  templateUrl: "./user-nav.component.html",
  styleUrls: ["./user-nav.component.css"]
})
export class UserNavComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = this.authService.getUserData();
  }

  onLogoutClick = () => {
    this.authService.logout();
    this.router.navigate(["login"]);
    return false;
  };
}
