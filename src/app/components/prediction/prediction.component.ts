import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";

@Component({
  selector: "app-prediction",
  templateUrl: "./prediction.component.html",
  styleUrls: ["./prediction.component.scss"]
})
export class PredictionComponent implements OnInit {
  constructor(public nav: NavbarServiceService) {}

  ngOnInit() {
    this.nav.show();
  }

  submit(e) {
    console.log(e);
  }
}
