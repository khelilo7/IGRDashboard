import { Component, OnInit } from "@angular/core";
import { ChartType, ChartOptions } from "chart.js";
import { Label } from "ng2-charts";
import { NavbarServiceService } from "src/app/services/navbar-service.service";
import { StatsService } from "src/app/services/stats.service";

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
    "Dispensee",
    "Reaffecte",
    "Jetee",
    "Affectee sur stock",
    "Préparee controlee",
    "Préparee non controlee"
  ];
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartData = [];

  public barChartLabels2 = ["Retard", "Delais OK"];
  public barChartData2 = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
  ];

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        }
      }
    }
  };
  public pieChartLabels: Label[] = [
    ["Download", "Sales"],
    ["In", "Store", "Sales"],
    "Mail Sales"
  ];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = "pie";
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: [
        "rgba(255,0,0,0.3)",
        "rgba(0,255,0,0.3)",
        "rgba(0,0,255,0.3)"
      ]
    }
  ];

  no_prep = 0;
  prep_retard = 0;
  prep_jetee = 0;

  constructor(public nav: NavbarServiceService, private stats: StatsService) {}

  ngOnInit() {
    this.nav.show();
    this.getVars();
    this.getStatsStatut();
    this.getStatsRetard();
  }

  getVars() {
    this.stats
      .getVars()
      .subscribe(data => this.changeData(data), error => console.log(error));
  }

  getStatsStatut() {
    this.stats
      .getStatsStatut()
      .subscribe(
        data => this.setStatutChart(data),
        error => console.log(error)
      );
  }

  getStatsRetard() {
    this.stats
      .getStatsRetard()
      .subscribe(
        data => this.setRetardChart(data),
        error => console.log(error)
      );
  }

  changeData(data) {
    this.no_prep = data.no_prep;
    this.prep_retard = data.prep_retard;
    this.prep_jetee = data.prep_jetee;
  }

  setStatutChart(d) {
    var bcd = [];
    for (var i = 0; i < d.length; i++) {
      bcd.push({
        data: [
          d[i]["Dispensee"],
          d[i]["Reaffecte"],
          d[i]["Jetee"],
          d[i]["Affectee sur stock"],
          d[i]["Préparee controlee"],
          d[i]["Préparee non controlee"]
        ],
        label: d[i].annee
      });
    }
    this.barChartData = bcd;
  }

  setRetardChart(d) {
    var bcd = [];
    for (var i = 0; i < d.length; i++) {
      bcd.push({
        data: [d[i]["Retard"], d[i]["Delais OK"]],
        label: d[i].annee
      });
    }
    this.barChartData2 = bcd;
  }
}
