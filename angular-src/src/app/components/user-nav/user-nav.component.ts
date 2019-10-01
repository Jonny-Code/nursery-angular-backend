import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-nav",
  templateUrl: "./user-nav.component.html",
  styleUrls: ["./user-nav.component.css"]
})
export class UserNavComponent implements OnInit {
  constructor() {}

  addActive = e => {
    console.log(e.target);
  };

  getLocation = () => {
    return false;
  };

  setLocation = () => {
    console.log();
  };

  ngOnInit() {}
}
