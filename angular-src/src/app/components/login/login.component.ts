import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService,
    private validateService: ValidateService
  ) {}

  ngOnInit() {}

  onLoginSubmit = () => {
    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateLogIn(user)) {
      this.flashMessageService.show("please fill in all of the fields", {
        cssClass: "alert-danger text-center"
      });
      return false;
    }

    this.authService.authenticateUser(user).subscribe(
      (data: any) => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(["home"]);
        } else {
          this.flashMessageService.show(data.msg, {
            cssClass: "alert-danger text-center"
          });
          this.router.navigate(["login"]);
        }
      },
      err => console.log(err)
    );
  };
}
