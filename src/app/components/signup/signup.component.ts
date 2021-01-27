import { Component } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "./api.service";
import { Redirect } from "../../services/redirect.service";

@Component({
  selector: "signup-form",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignUpFormComponent {
  public signupForm: FormGroup;
  response: any;

  constructor(
    private router: Router,
    private frmbuilder: FormBuilder,
    private api: ApiService,
    private redirect: Redirect
  ) {
    this.signupForm = frmbuilder.group({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
    });
  }

  register(signupForm: any) {
    this.api
      .signup({ recaptcha: this.response, data: this.signupForm.value })
      .subscribe(
        (result: any) => {
          this.redirect.redirect(result);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
