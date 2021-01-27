import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "add-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  ProductData;
  id;
  constructor(private router: Router, private http: HttpClient) {
    this.http
      .get(environment.API_BASE_V1 + "/show_product")
      .subscribe((data) => {
        this.ProductData = data;
        console.log(data);
      });
  }

  editProductDetails(id: any) {
    console.log(id);
  }
  deleteEmployeeDetails(id: any) {
    console.log(id);
    this.http
      .post(environment.API_BASE_V1 + "/delete_product", { params: id })
      .subscribe((data: any) => {
        if ((data.message = "succces")) {
          this.http
            .get(environment.API_BASE_V1 + "/show_product")
            .subscribe((data) => {
              this.ProductData = data;
              console.log(data);
            });
        }
      });
  }

  NewEmployee() {
    this.router.navigateByUrl("/");
  }
}
