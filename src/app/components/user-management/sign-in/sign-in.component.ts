import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { UserChangeService } from "src/app/services/user-change.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  constructor(
    public nav: NavbarServiceService,
    private _router: Router,
    private _user: UserService,
    private change: UserChangeService
  ) {}

  ngOnInit() {
    this.nav.hide();
  }

  moveToRegister() {
    this._router.navigate(["/sign-up"]);
  }

  sendUsername(data) {
    this.change.changeName(data.username);
    this.change.changeRole(data.role);
  }

  login() {
    if (!this.loginForm.valid) {
      console.log("Invalid");
      return;
    }
    //console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value)).subscribe(
      data => {
        this.sendUsername(data);
        this._router.navigate(["/"]);
      },
      error => console.error(error)
    );
  }
}
