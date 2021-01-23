import { Component } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "employee-details",
  templateUrl: "./addemployeeDetails.component.html",
  styleUrls: ["./addemployeeDetails.component.css"],
})
export class EmployeeDetailsComponent {
  public employeeForm: FormGroup;
  userId;

  constructor(
    private router: Router,
    private frmbuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.employeeForm = frmbuilder.group({
      name: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      salary: new FormControl(),
      email: new FormControl(),
      profile_image: new FormControl(),
    });
  }

  addEmployeeDetails(employeeForm: any) {
    // console.log(this.employeeForm.value);

    this.http
      .post<any>(
        environment.API_BASE_V1 + "/add_brand",
        this.employeeForm.value
      )
      .subscribe(
        (data) => {
          if ((data.message = "sucess")) {
            console.log("Good");
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
