import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { Analyse } from "./Analyse";
@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  analyse: Analyse = {
    name: "",
    type: "",
    state: "",
    zones: "",
    drogue: "",
    dose: "",
    INR: "",
    tp: ""
  };
  show: boolean = false;

  selectedFile: File = null;
  selectedFilePath = "";
  constructor(private http: HttpClient, public nav: NavbarServiceService) {}

  ngOnInit() {
    this.nav.show();
  }

  onFileSelected(event) {
    this.selectedFilePath = event.target.value;
    this.selectedFile = <File>event.target.files[0];
  }
  submit() {
    console.log(this.selectedFilePath);
    const fd = new FormData();
    fd.append("PDF", this.selectedFile, this.selectedFile.name);
    this.http
      .post("http://localhost:5000/reports/upload", fd)
      .subscribe(res => {
        this.analyse = res;
        this.show = true;
      });
  }
}
