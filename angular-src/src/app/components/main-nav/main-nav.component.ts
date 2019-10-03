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
  isLoggedIn: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) {}

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }

  onLogoutClick = () => {
    this.authService.logout();
    this.flashMessageService.show("you are logged out", {
      cssClass: "alert-success text-center"
    });
    this.router.navigate(["login"]);
    return false;
  };
}
