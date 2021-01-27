import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/DashBoard/dashboard.component";
import { SignUpFormComponent } from "./components/signup/signup.component";
import { LogInFormComponent } from "./components/login/login.component";
import { AdminGuardService as AdminGuard } from "../app/gaurd/adminGuard.service";
const routes: Routes = [
  {
    path: "admin/dashboard",
    canActivate: [AdminGuard],
    pathMatch: "full",
    component: DashboardComponent,
  },
  {
    path: "signup",
    pathMatch: "full",
    component: SignUpFormComponent,
  },
  {
    path: "login",
    pathMatch: "full",
    component: LogInFormComponent,
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
