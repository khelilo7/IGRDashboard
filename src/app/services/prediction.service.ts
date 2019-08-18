import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PredictionService {
  fd: FormData;
  constructor(private http: HttpClient) {}

  getResult(fd) {
    return this.http.post("http://localhost:3000/predict/upload", fd);
  }

  test() {
    return this.http.get("http://localhost:3000/predict/test");
  }
  setFd(_fd) {
    this.fd = _fd;
  }
  getFd() {
    return this.fd;
  }
}
