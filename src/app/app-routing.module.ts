import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicComponent} from "./components/public/public.component";
import {NotFoundComponent} from "./components/public/not-found/not-found.component";
import {LoginComponent} from "./components/public/login/login.component";
import {SignUpComponent} from "./components/public/sign-up/sign-up.component";
import {MainComponent} from "./components/main/main.component";
import {DashboardComponent} from "./components/main/dashboard/dashboard.component";
import {ReportsComponent} from "./components/main/reports/reports.component";
import {VehiclesComponent} from "./components/main/vehicles/vehicles.component";
import {MapComponent} from "./components/main/map/map.component";
import {AccountComponent} from "./components/main/account/account.component";
import {OrdersComponent} from "./components/main/orders/orders.component";
import {VehicleDetailsComponent} from "./components/main/vehicles/vehicle-details/vehicle-details.component";
import {ComplainComponent} from "./components/main/complain/complain.component";
import {NewComplainComponent} from "./components/main/complain/new-complain/new-complain.component";

const routes: Routes = [
  {
    path: "", component: MainComponent, children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "map", component: MapComponent},
      {path: "vehicles", component: VehiclesComponent},
      {path: "reports", component: ReportsComponent},
      {path: "account", component: AccountComponent},
      {path: "orders", component: OrdersComponent},
      {path: "vehicles/details", component:VehicleDetailsComponent},
      {path: "complaints", component:ComplainComponent},
      {path: "complaints/new", component:NewComplainComponent},
    ]
  },
  {
    path: "", component: PublicComponent, children: [
      {path: "login", component: LoginComponent},
      {path: "sign-up", component: SignUpComponent},
      {path: "**", component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
