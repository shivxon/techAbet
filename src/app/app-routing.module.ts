import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditComponent } from "./components/Edit/edit.component";
import { EmployeeDetailsComponent } from "./components/EmployeeDetails/addemployeeDetails.component";

import { DashboardComponent } from "./components/DashBoard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: "employee_details/:id/edit",
    pathMatch: "full",
    component: EditComponent,
  },
  {
    path: "employee",
    pathMatch: "full",
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
