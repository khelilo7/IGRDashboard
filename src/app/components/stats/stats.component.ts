import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { NavbarServiceService } from "src/app/services/navbar-service.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [
    { data: [66, 69, 81, 190, 55], label: "Series A" },
    { data: [86, 29, 88, 19, 65], label: "Series B" }
  ];

  constructor(public nav: NavbarServiceService) {}

  ngOnInit() {
    this.nav.show();
  }
}
