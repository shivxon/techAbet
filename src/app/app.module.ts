import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { EditComponent } from "./components/Edit/edit.component";
import { EmployeeDetailsComponent } from "./components/EmployeeDetails/addemployeeDetails.component";
import { DashboardComponent } from "./components/DashBoard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    EmployeeDetailsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
