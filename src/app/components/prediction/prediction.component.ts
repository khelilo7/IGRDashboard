import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-prediction",
  templateUrl: "./prediction.component.html",
  styleUrls: ["./prediction.component.scss"]
})
export class PredictionComponent implements OnInit {
  username: String = "";
  constructor(
    public nav: NavbarServiceService,
    private _user: UserService,
    private _router: Router
  ) {
    this._user
      .user()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(["/sign-in"])
      );
  }

  addName(data) {
    this.username = data.username;
  }

  ngOnInit() {
    this.nav.show();
  }

  submit(e) {
    console.log(e);
  }
}
