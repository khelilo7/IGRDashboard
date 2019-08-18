import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PredictionComponent } from "./components/prediction/prediction.component";
import { RouterModule, Routes } from "@angular/router";
import { StatsComponent } from "./components/stats/stats.component";
import { ReportsComponent } from "./components/reports/reports.component";
import { UploadComponent } from "./components/upload/upload.component";
import { ProfilComponent } from "./components/profil/profil.component";
import { InputTableComponent } from "./components/prediction/input-table/input-table.component";
import { CardComponent } from "./components/stats/card/card.component";
import { SignInComponent } from "./components/user-management/sign-in/sign-in.component";
import { SignUpComponent } from "./components/user-management/sign-up/sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./services/user.service";
import { StatsService } from "./services/stats.service";
import { PredictionService } from "./services/prediction.service";
import { ResultComponent } from "./components/prediction/result/result.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/predictions", pathMatch: "full" },
  { path: "predictions", component: PredictionComponent },
  { path: "stats", component: StatsComponent },
  { path: "reports", component: ReportsComponent },
  { path: "upload", component: UploadComponent },
  { path: "profil", component: ProfilComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "result", component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PredictionComponent,
    StatsComponent,
    ReportsComponent,
    UploadComponent,
    ProfilComponent,
    InputTableComponent,
    CardComponent,
    SignInComponent,
    SignUpComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, StatsService, PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
