import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UserChangeService } from "src/app/services/user-change.service";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent implements OnInit {
  username: String = "";
  bool: Boolean = false;
  constructor(
    public nav: NavbarServiceService,
    private _router: Router,
    private _user: UserService,
    private change: UserChangeService
  ) {
    change.usernameAnnounced$.subscribe(name => {
      this.username = name;
    });
    change.roleAnnounced$.subscribe(role => (this.bool = role == "Admin"));
  }

  addName(data) {
    this.username = data.username;
    this.bool = data.role == "Admin";
  }

  ngOnInit() {
    this._user
      .user()
      .subscribe(
        data => this.addName(data),
        error => this._router.navigate(["/sign-in"])
      );
  }

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
