import { Component, OnInit } from "@angular/core";
import { PredictionService } from "src/app/services/prediction.service";
import { UserService } from "src/app/services/user.service";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.scss"]
})
export class ResultComponent implements OnInit {
  data: [];
  loading = true;
  fd: FormData;
  constructor(
    private prediction: PredictionService,
    private user: UserService,
    private nav: NavbarServiceService,
    private _router: Router
  ) {
    this.user
      .user()
      .subscribe(
        data => console.log("ok"),
        error => this._router.navigate(["/sign-in"])
      );
  }

  ngOnInit() {
    this.nav.show();
    this.fd = this.prediction.getFd();
    console.log(this.fd);
    this.prediction.getResult(this.fd).subscribe(
      data => {
        this.loadData(data);
        this.loading = false;
      },
      error => console.error(error)
    );
  }

  loadData(data) {
    this.data = data;
  }
}
