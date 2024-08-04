import {NgModule, ViewChildren} from '@angular/core';
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
import {ViewComplaintComponent} from "./components/main/complain/view-complaint/view-complaint.component";
import {EmergencyComponent} from "./components/main/emergency/emergency.component";
import {AddServiceComponent} from "./components/main/emergency/add-service/add-service.component";
import {AddFamilyComponent} from "./components/main/emergency/add-family/add-family.component";
import {AppointmentsComponent} from "./components/main/appointments/appointments.component";
import {NewAppointmentComponent} from "./components/main/appointments/new-appointment/new-appointment.component";
import {LocationrequestsComponent} from "./components/main/locationrequests/locationrequests.component";
import {CalendarComponent} from "./components/main/appointments/calendar/calendar.component";
import {NewRequestComponent} from "./components/main/locationrequests/new-request/new-request.component";
import {SearchRequestComponent} from "./components/main/locationrequests/search-request/search-request.component";
import {RequestHistoryComponent} from "./components/main/locationrequests/request-history/request-history.component";
import {ViewRequestComponent} from "./components/main/locationrequests/view-request/view-request.component";
import {CompanySubscriptionComponent} from "./components/main/company-subscription/company-subscription.component";
import {VideoCapturesComponent} from "./components/main/video-captures/video-captures.component";
import {PoliceStationsComponent} from "./components/main/police-stations/police-stations.component";
import {PortfolioComponent} from "./components/main/portfolio/portfolio.component";
import {SetOpeningHoursComponent} from "./components/main/set-opening-hours/set-opening-hours.component";
import {AddStationComponent} from "./components/main/police-stations/add-station/add-station.component";
import {CoporateDashboardComponent} from "./components/main/coporate-dashboard/coporate-dashboard.component";
import {PaymentsComponent} from "./components/main/payments/payments.component";
import {InquiriesComponent} from "./components/main/inquiries/inquiries.component";
import {NotificationsComponent} from "./components/main/notifications/notifications.component";
import {ProductsComponent} from "./components/main/products/products.component";
import {AddProductComponent} from "./components/main/products/add-product/add-product.component";
import {UpdateProductComponent} from "./components/main/products/update-product/update-product.component";
import {PublicContainerComponent} from "./components/public/public-container/public-container.component";
import {Home2Component} from "./components/public/landing-container/home2/home2.component";
import {VendorsComponent} from "./components/public/landing-container/vendors/vendors.component";
import {PoliceDashboardComponent} from "./components/main/police-dashboard/police-dashboard.component";
import {MaintenanceDashboardComponent} from "./components/main/maintenance-dashboard/maintenance-dashboard.component";
import {VendorDashboardComponent} from "./components/main/vendor-dashboard/vendor-dashboard.component";
import {AnalyticsComponent} from "./components/main/analytics/analytics.component";
import {AdminDashboardComponent} from "./components/main/admin-dashboard/admin-dashboard.component";
import {UsersComponent} from "./components/main/users/users.component";
import {AllSubscriptionsComponent} from "./components/main/all-subscriptions/all-subscriptions.component";
import {AddNewPlanComponent} from "./components/main/all-subscriptions/add-new-plan/add-new-plan.component";
import {DashboardSwichComponent} from "./components/main/dashboard-swich/dashboard-swich.component";
import {PoliceRequestsComponent} from "./components/main/police-requests/police-requests.component";

const routes: Routes = [
  {
    path: "", component: PublicComponent, children: [
      {path: "", component: Home2Component},
      {path: "vendors", component: VendorsComponent},
    ]
  },
  {
    path: "", component: MainComponent, children: [
      {path: "dashboard", component: DashboardSwichComponent},
      {path: "map", component: MapComponent},
      {path: "vehicles", component: VehiclesComponent},
      {path: "reports", component: ReportsComponent},
      {path: "account", component: AccountComponent},
      {path: "orders", component: OrdersComponent},
      {path: "vehicles/details", component: VehicleDetailsComponent},
      {path: "complaints", component: ComplainComponent},
      {path: "complaints/new", component: NewComplainComponent},
      {path: "complaints/view", component: ViewComplaintComponent},
      {path: "emergency", component: EmergencyComponent},
      {path: "emergency/add-family", component: AddFamilyComponent},
      {path: "emergency/add-service", component: AddServiceComponent},
      {path: "appointments", component: AppointmentsComponent},
      {path: "appointments/new", component: NewAppointmentComponent},
      {path: "appointments/calendar", component: CalendarComponent},
      {path: "locationrequests", component: LocationrequestsComponent},
      {path: "locationrequests/new", component: NewRequestComponent},
      {path: "locationrequests/search", component: SearchRequestComponent},
      {path: "locationrequests/history", component: RequestHistoryComponent},
      {path: "locationrequests/view", component: ViewRequestComponent},
      {path: "company-subscription", component: CompanySubscriptionComponent},
      {path: "video-captures", component: VideoCapturesComponent},
      {path: "police-stations", component: PoliceStationsComponent},
      {path: "police-stations/new", component: AddStationComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "set-opening-hours", component: SetOpeningHoursComponent},
      {path: "coporate-dashboard", component: CoporateDashboardComponent},
      {path: "payments", component: PaymentsComponent},
      {path: "inquiries", component: InquiriesComponent},
      {path: "notifications", component: NotificationsComponent},
      {path: "products", component: ProductsComponent},
      {path: "products/add", component: AddProductComponent},
      {path: "products/update", component: UpdateProductComponent},
      {path: "police-dashboard", component: PoliceDashboardComponent},
      {path: "maintenance-dashboard", component: MaintenanceDashboardComponent},
      {path: "vendor-dashboard", component: VendorDashboardComponent},
      {path: "analytics", component: AnalyticsComponent},
      {path: "admin-dashboard", component: AdminDashboardComponent},
      {path: "users", component: UsersComponent},
      {path: "all-subscriptions", component: AllSubscriptionsComponent},
      {path: "all-subscriptions/add-new-plan", component: AddNewPlanComponent},
      {path: "police-requests", component: PoliceRequestsComponent},
    ]
  },
  {
    path: "", component: PublicContainerComponent, children: [
      {path: "login", component: LoginComponent},
      {path: "sign-up", component: SignUpComponent},
      {path: "**", component: NotFoundComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
