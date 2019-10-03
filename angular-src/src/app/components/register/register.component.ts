import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: string;
  email: string;
  username: string;
  password: string;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit = () => {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show("please fill in all of the fields", {
        cssClass: "alert-danger text-center"
      });
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("please use a valid email", {
        cssClass: "alert-danger text-center"
      });
      return false;
    }

    // this.authService.registerUser(user).subscribe((data: any) => {
    //   if (data.success) {
    //     this.flashMessagesService.show(
    //       "Successfully registered. You can now login",
    //       {
    //         cssClass: "alert-success text-center"
    //       }
    //     );
    //     this.router.navigate(["/login"]);
    //   } else {
    //     this.flashMessagesService.show(
    //       "Registration unsuccessful. Try again.",
    //       {
    //         cssClass: "alert-danger text-center"
    //       }
    //     );
    //     this.router.navigate(["/register"]);
    //   }
    // });
  };
}
