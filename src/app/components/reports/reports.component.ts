import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NavbarServiceService } from "src/app/services/navbar-service.service";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  Name = "M. Khalil jridi";
  type = "Coagulation";
  state = "Taux de prothrombine sous traitement";
  Zones = " INR entre 2 et 3 (cible 2,5)";
  drogue = "Sintrom 4 mg";
  Posologie = "1 comprimé par jour";
  INR = 0.6;
  tp = 20;
  show = false;

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
  }
}

// const fd = new FormData();
// fd.append("PDF", this.selectedFile, this.selectedFile.name);
// this.http.post("url", fd).subscribe(respponse => {
//   console.log(respponse);
// });
