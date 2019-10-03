import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-user-nav",
  templateUrl: "./user-nav.component.html",
  styleUrls: ["./user-nav.component.css"]
})
export class UserNavComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private authService: AuthService) {}

  addActive = e => {
    console.log(e.target);
  };

  getLocation = () => {
    return false;
  };

  setLocation = () => {
    console.log();
  };

  ngOnInit() {
    if (this.authService.loggedIn()) {
      this.isLoggedIn = true;
    } else this.isLoggedIn = false;
  }
}
