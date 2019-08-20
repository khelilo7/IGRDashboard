import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor(private http: HttpClient) {}

  getResult(fd) {
    return this.http.post("http://localhost:3000/upload", fd);
  }
}
