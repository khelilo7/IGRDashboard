import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StatsService {
  constructor(private _http: HttpClient) {}

  getVars() {
    return this._http.get("http://127.0.0.1:3000/stats/vars", {
      observe: "body",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  getStatsStatut() {
    return this._http.get("http://127.0.0.1:3000/stats/statut", {
      observe: "body",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  getStatsRetard() {
    return this._http.get("http://127.0.0.1:3000/stats/retard", {
      observe: "body",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  getStatsTh() {
    return this._http.get("http://127.0.0.1:3000/stats/th", {
      observe: "body",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }
}
