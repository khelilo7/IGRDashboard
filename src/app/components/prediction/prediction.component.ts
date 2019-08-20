import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PredictionService } from "src/app/services/prediction.service";

@Component({
  selector: "app-prediction",
  templateUrl: "./prediction.component.html",
  styleUrls: ["./prediction.component.scss"]
})
export class PredictionComponent implements OnInit {
  username: String = "";
  selectedFile: File = null;
  selectedFilePath = "";
  name = "";
  constructor(
    public nav: NavbarServiceService,
    private _user: UserService,
    private _router: Router,
    private pred: PredictionService
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

  onFileSelected(event) {
    this.selectedFilePath = event.target.value;
    this.selectedFile = <File>event.target.files[0];
    this.name = this.selectedFile.name;
  }

  submit(e) {
    const fd = new FormData();
    fd.append("PDF", this.selectedFile, this.selectedFile.name);
    this.pred.setFd(fd);
    this._router.navigate(["/result"]);
  }
}
