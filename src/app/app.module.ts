import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PublicComponent} from './components/public/public.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NotFoundComponent} from './components/public/not-found/not-found.component';
import {LoginComponent} from './components/public/login/login.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {SignUpComponent} from './components/public/sign-up/sign-up.component';
import {MatButtonModule} from "@angular/material/button";
import {TermsComponent} from './components/public/terms/terms.component';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MainComponent} from './components/main/main.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { MapComponent } from './components/main/map/map.component';
import { VehiclesComponent } from './components/main/vehicles/vehicles.component';
import { ReportsComponent } from './components/main/reports/reports.component';
import { AccountComponent } from './components/main/account/account.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {GoogleMapsModule} from "@angular/google-maps";
import { AddVehicleComponent } from './components/main/vehicles/add-vehicle/add-vehicle.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import { LinkDeviceComponent } from './components/main/vehicles/link-device/link-device.component';
import {QRCodeModule} from "angularx-qrcode";
import { OrdersComponent } from './components/main/orders/orders.component';
import { VehicleDetailsComponent } from './components/main/vehicles/vehicle-details/vehicle-details.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import { ComplainComponent } from './components/main/complain/complain.component';
import { NewComplainComponent } from './components/main/complain/new-complain/new-complain.component';
import { ViewComplaintComponent } from './components/main/complain/view-complaint/view-complaint.component';
import { EmergencyComponent } from './components/main/emergency/emergency.component';
import { AddFamilyComponent } from './components/main/emergency/add-family/add-family.component';
import { AddServiceComponent } from './components/main/emergency/add-service/add-service.component';
import { AppointmentsComponent } from './components/main/appointments/appointments.component';
import { NewAppointmentComponent } from './components/main/appointments/new-appointment/new-appointment.component';
import { LocationrequestsComponent } from './components/main/locationrequests/locationrequests.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { CalendarComponent } from './components/main/appointments/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewRequestComponent } from './components/main/locationrequests/new-request/new-request.component';
import { SearchRequestComponent } from './components/main/locationrequests/search-request/search-request.component';
import { RequestHistoryComponent } from './components/main/locationrequests/request-history/request-history.component';
import { ViewRequestComponent } from './components/main/locationrequests/view-request/view-request.component';
import { CompanySubscriptionComponent } from './components/main/company-subscription/company-subscription.component';
import { VideoCapturesComponent } from './components/main/video-captures/video-captures.component';
import { PoliceStationsComponent } from './components/main/police-stations/police-stations.component';
import { SetOpeningHoursComponent } from './components/main/set-opening-hours/set-opening-hours.component';
import { PortfolioComponent } from './components/main/portfolio/portfolio.component';
import { AddStationComponent } from './components/main/police-stations/add-station/add-station.component';
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { CoporateDashboardComponent } from './components/main/coporate-dashboard/coporate-dashboard.component';
import { PaymentsComponent } from './components/main/payments/payments.component';
import { InquiriesComponent } from './components/main/inquiries/inquiries.component';
import { NotificationsComponent } from './components/main/notifications/notifications.component';
import { ProductsComponent } from './components/main/products/products.component';
import { AddProductComponent } from './components/main/products/add-product/add-product.component';
import { UpdateProductComponent } from './components/main/products/update-product/update-product.component';
import { AddInquiryComponent } from './components/main/inquiries/add-inquiry/add-inquiry.component';
import { PublicContainerComponent } from './components/public/public-container/public-container.component';
import { LandingContainerComponent } from './components/public/landing-container/landing-container.component';
import { Home2Component } from './components/public/landing-container/home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent,
    TermsComponent,
    MainComponent,
    DashboardComponent,
    MapComponent,
    VehiclesComponent,
    ReportsComponent,
    AccountComponent,
    AddVehicleComponent,
    LinkDeviceComponent,
    OrdersComponent,
    VehicleDetailsComponent,
    ComplainComponent,
    NewComplainComponent,
    ViewComplaintComponent,
    EmergencyComponent,
    AddFamilyComponent,
    AddServiceComponent,
    AppointmentsComponent,
    NewAppointmentComponent,
    LocationrequestsComponent,
    CalendarComponent,
    NewRequestComponent,
    SearchRequestComponent,
    RequestHistoryComponent,
    ViewRequestComponent,
    CompanySubscriptionComponent,
    VideoCapturesComponent,
    PoliceStationsComponent,
    SetOpeningHoursComponent,
    PortfolioComponent,
    AddStationComponent,
    CoporateDashboardComponent,
    PaymentsComponent,
    InquiriesComponent,
    NotificationsComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddInquiryComponent,
    PublicContainerComponent,
    LandingContainerComponent,
    Home2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatBadgeModule,
    GoogleMapsModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    QRCodeModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatDatepickerModule,
    FullCalendarModule,
    MatCardModule,
    MatStepperModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
