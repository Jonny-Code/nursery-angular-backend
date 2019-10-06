import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"]
})
export class MainNavComponent implements OnInit {
  email: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("user") != null) {
      this.authService
        .getHome()
        .subscribe((obs: any) => (this.email = obs.user.email));
    }
  }

  onLogoutClick = () => {
    this.router.navigate(["login"]);
    this.authService.logout();
    return false;
  };
}
