import { Component, OnInit } from "@angular/core";
import { NavbarServiceService } from "src/app/services/navbar-service.service";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  constructor(public nav: NavbarServiceService) {}

  ngOnInit() {
    this.nav.show();
  }
}
