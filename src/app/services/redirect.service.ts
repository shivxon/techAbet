import { Injectable } from "@angular/core";
import { LocalStorage } from "../services/localStorage.service";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root",
})
export class Redirect {
  constructor(
    private localStorageService: LocalStorage,
    private router: Router
  ) {}

  redirect(result: any) {
    if (result && result.role == "Admin") {
      this.localStorageService.setStorage("user", {
        role: result.role,
        email: result.email,
      });
      this.router.navigateByUrl("admin/dashboard");
    } else {
      this.router.navigateByUrl("/");
    }
  }
}
