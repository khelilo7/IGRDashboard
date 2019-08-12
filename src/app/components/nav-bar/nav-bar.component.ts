import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  username: String = "";
  constructor(
    public nav: NavbarServiceService,
    private _router: Router,
    private _user: UserService
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

  ngOnInit() {}

  logout() {
    this._user.logout().subscribe(
      data => {
        console.log(data);
        this._router.navigate(["sign-in"]);
      },
      error => console.error(error)
    );
  }
}
