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
  EmployeeData;
  id;
  constructor(private router: Router, private http: HttpClient) {
    this.http.get(environment.API_BASE_V1 + "/show_emp").subscribe((data) => {
      this.EmployeeData = data;
      console.log(data);
    });
  }

  editEmployeeDetails(id: any) {
    console.log(id);
    this.router.navigateByUrl("employee_details/" + id + "/edit");
  }
  deleteEmployeeDetails(id: any) {
    console.log(id);
    this.http
      .post(environment.API_BASE_V1 + "/delete_employee", { params: id })
      .subscribe((data: any) => {
        if ((data.message = "succces")) {
          this.http
            .get(environment.API_BASE_V1 + "/show_emp")
            .subscribe((data) => {
              this.EmployeeData = data;
              console.log(data);
            });
        }
      });
  }

  NewEmployee() {
    this.router.navigateByUrl("/employee");
  }
}
