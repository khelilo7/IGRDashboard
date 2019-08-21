import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserChangeService {
  // Observable string sources
  private usernameChnagedSource = new Subject<string>();
  private roleChnagedSource = new Subject<string>();

  // Observable string streams
  usernameAnnounced$ = this.usernameChnagedSource.asObservable();
  roleAnnounced$ = this.roleChnagedSource.asObservable();
  // Service message commands
  changeName(userName: string) {
    this.usernameChnagedSource.next(userName);
  }

  changeRole(role: string) {
    this.roleChnagedSource.next(role);
  }
}
