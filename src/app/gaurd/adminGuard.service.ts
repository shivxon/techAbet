import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { LocalStorage } from "../services/localStorage.service";

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(
    public localStorageService: LocalStorage,
    public router: Router
  ) {}
  canActivate(): boolean {
    const user = this.localStorageService.getValueByKey("user");

    if (user && user.role == "Admin") {
      return true;
    } else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
