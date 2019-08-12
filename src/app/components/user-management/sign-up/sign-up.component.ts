import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });

  constructor(
    public nav: NavbarServiceService,
    private _router: Router,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.nav.hide();
  }

  moveToLogin() {
    this._router.navigate(["/sign-in"]);
  }

  register() {
    if (
      !this.registerForm.valid ||
      this.registerForm.controls.password.value !=
        this.registerForm.controls.cpass.value
    ) {
      console.log("Invalid Form");
      return;
    }
    this._userService
      .register(JSON.stringify(this.registerForm.value))
      .subscribe(
        data => {
          console.log(data);
          this._router.navigate(["/sign-in"]);
        },
        error => console.log(error)
      );
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
