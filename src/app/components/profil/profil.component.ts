import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  username = "";
  email = "";

  constructor(
    public nav: NavbarServiceService,
    private _user: UserService,
    private _router: Router
  ) {}

  addData(data) {
    this.email = data.email;
    this.username = data.username;
    console.log(data);
  }
  ngOnInit() {
    this.nav.show();
    this._user
      .user()
      .subscribe(
        data => this.addData(data),
        error => this._router.navigate(["/sign-in"])
      );
  }

  changeData(e) {
    console.log(e.target.value);
  }
}
