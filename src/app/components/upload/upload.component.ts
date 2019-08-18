import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  selectedFile: File = null;
  username = "";
  name = "";
  constructor(
    public nav: NavbarServiceService,
    private _user: UserService,
    private _router: Router,
    private http: HttpClient
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
    this.selectedFile = <File>event.target.files[0];
    this.name = this.selectedFile.name;
  }

  submit(e) {
    const fd = new FormData();
    fd.append("PDF", this.selectedFile, this.selectedFile.name);
    //call to service to send the file
    this._router.navigate(["/result/train"]);
  }
}
