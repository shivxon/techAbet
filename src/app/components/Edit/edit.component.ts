import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "edit-package",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent {
  public EditForm: FormGroup;
  fieldData: any;
  params;
  name: Text = null;
  age: Number = null;
  phone: Number = null;
  salary: Number = null;
  email: Text = null;
  profileImage;

  constructor(
    private router: Router,
    private frmbuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.EditForm = frmbuilder.group({
      name: new FormControl(),
      age: new FormControl(),
      phone: new FormControl(),
      salary: new FormControl(),
      email: new FormControl(),
      profile_image: new FormControl(),
    });
    this.route.params.subscribe((prams) => {
      this.params = prams;
      console.log(this.params);

      this.http
        .get<any>(
          environment.API_BASE_V1 + "/show_single_employee/" + this.params.id
        )
        .subscribe((data) => {
          if (data) {
            this.fieldData = data;
            this.name = this.fieldData.name;
            this.age = this.fieldData.age;
            this.phone = this.fieldData.phone;
            this.salary = this.fieldData.salary;
            this.email = this.fieldData.email;
            this.profileImage = this.fieldData.profile_image;
            console.log(this.fieldData);
          }
        });
    });
  }
  edit(EditForm: any) {
    console.log(this.EditForm.value);
    this.http
      .post<any>(environment.API_BASE_V1 + "/edited_employee", {
        form: this.EditForm.value,
        params: this.params,
      })
      .subscribe(
        (data) => {
          console.log(data);
          if (data.message == "succces") {
            this.router.navigateByUrl("/");
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
