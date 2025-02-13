import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgApexchartsModule} from 'ng-apexcharts';

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
import {DashboardComponent} from './components/main/dashboard/dashboard.component';
import {MapComponent} from './components/main/map/map.component';
import {VehiclesComponent} from './components/main/vehicles/vehicles.component';
import {ReportsComponent} from './components/main/reports/reports.component';
import {AccountComponent} from './components/main/account/account.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {GoogleMapsModule} from "@angular/google-maps";
import {AddVehicleComponent} from './components/main/vehicles/add-vehicle/add-vehicle.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {LinkDeviceComponent} from './components/main/vehicles/link-device/link-device.component';
import {QRCodeModule} from "angularx-qrcode";
import {OrdersComponent} from './components/main/orders/orders.component';
import {VehicleDetailsComponent} from './components/main/vehicles/vehicle-details/vehicle-details.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {ComplainComponent} from './components/main/complain/complain.component';
import {NewComplainComponent} from './components/main/complain/new-complain/new-complain.component';
import {ViewComplaintComponent} from './components/main/complain/view-complaint/view-complaint.component';
import {EmergencyComponent} from './components/main/emergency/emergency.component';
import {AddFamilyComponent} from './components/main/emergency/add-family/add-family.component';
import {AddServiceComponent} from './components/main/emergency/add-service/add-service.component';
import {AppointmentsComponent} from './components/main/appointments/appointments.component';
import {NewAppointmentComponent} from './components/main/appointments/new-appointment/new-appointment.component';
import {LocationrequestsComponent} from './components/main/locationrequests/locationrequests.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {CalendarComponent} from './components/main/appointments/calendar/calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {NewRequestComponent} from './components/main/locationrequests/new-request/new-request.component';
import {SearchRequestComponent} from './components/main/locationrequests/search-request/search-request.component';
import {RequestHistoryComponent} from './components/main/locationrequests/request-history/request-history.component';
import {ViewRequestComponent} from './components/main/locationrequests/view-request/view-request.component';
import {CompanySubscriptionComponent} from './components/main/company-subscription/company-subscription.component';
import {VideoCapturesComponent} from './components/main/video-captures/video-captures.component';
import {PoliceStationsComponent} from './components/main/police-stations/police-stations.component';
import {SetOpeningHoursComponent} from './components/main/set-opening-hours/set-opening-hours.component';
import {PortfolioComponent} from './components/main/portfolio/portfolio.component';
import {AddStationComponent} from './components/main/police-stations/add-station/add-station.component';
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CoporateDashboardComponent} from './components/main/coporate-dashboard/coporate-dashboard.component';
import {PaymentsComponent} from './components/main/payments/payments.component';
import {InquiryComponent} from './components/main/inquiries/inquiries.component';
import {NotificationsComponent} from './components/main/notifications/notifications.component';
import {ProductsComponent} from './components/main/products/products.component';
import {AddProductComponent} from './components/main/products/add-product/add-product.component';
import {UpdateProductComponent} from './components/main/products/update-product/update-product.component';
import {AddInquiryComponent} from './components/main/inquiries/add-inquiry/add-inquiry.component';
import {PublicContainerComponent} from './components/public/public-container/public-container.component';
import {LandingContainerComponent} from './components/public/landing-container/landing-container.component';
import {Home2Component} from './components/public/landing-container/home2/home2.component';
import {VendorsComponent} from './components/public/landing-container/vendors/vendors.component';
import {PoliceDashboardComponent} from './components/main/police-dashboard/police-dashboard.component';
import {MaintenanceDashboardComponent} from './components/main/maintenance-dashboard/maintenance-dashboard.component';
import {VendorDashboardComponent} from './components/main/vendor-dashboard/vendor-dashboard.component';
import {AnalyticsComponent} from './components/main/analytics/analytics.component';
import {AdminDashboardComponent} from './components/main/admin-dashboard/admin-dashboard.component';
import {UsersComponent} from './components/main/users/users.component';
import {AllSubscriptionsComponent} from './components/main/all-subscriptions/all-subscriptions.component';
import {AddNewPlanComponent} from './components/main/all-subscriptions/add-new-plan/add-new-plan.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import { DashboardSwichComponent } from './components/main/dashboard-swich/dashboard-swich.component';
import { PoliceRequestsComponent } from './components/main/police-requests/police-requests.component';
import { PoliceNewRequestComponent } from './components/main/police-requests/police-new-request/police-new-request.component';
import { PoliceViewRequestComponent } from './components/main/police-requests/police-view-request/police-view-request.component';
import { PoliceLocationHistoryComponent } from './components/main/police-requests/police-view-request/police-location-history/police-location-history.component';
import { PoliceVehicleFootageComponent } from './components/main/police-requests/police-view-request/police-location-history/police-vehicle-footage/police-vehicle-footage.component';
import { SubscriptionComponent } from './components/main/subscription/subscription.component';
import { VerificationCenterComponent } from './components/main/verification-center/verification-center.component';
import { UserVerificationDetailsComponent } from './components/main/verification-center/user-verification-details/user-verification-details.component';
import { VehicleVerificationDetailsComponent } from './components/main/verification-center/vehicle-verification-details/vehicle-verification-details.component';
import { MediaWallComponent } from './components/public/landing-container/media-wall/media-wall.component';
import { OneVideoComponent } from './components/public/landing-container/media-wall/one-video/one-video.component';
import { AddCommentComponent } from './components/public/landing-container/media-wall/add-comment/add-comment.component';
import { PostsComponent } from './components/main/posts/posts.component';
import { AddNewPostComponent } from './components/main/posts/add-new-post/add-new-post.component';
import { ViewPostComponent } from './components/main/posts/view-post/view-post.component';
import { LeaderboardComponent } from './components/public/landing-container/leaderboard/leaderboard.component';
import { VideoPlayerComponent} from "./components/main/video-captures/video-player/video-player.component";
import {NgOptimizedImage} from "@angular/common";
import {NewPostComponent} from "./components/main/posts/new-post/new-post.component";
import { PoliceStationComponent } from './components/main/police-stations/police-station/police-station.component';
import { RequestDetailsPopupComponent } from './components/main/police-requests/request-details-popup/request-details-popup.component';
import { VehicleSearchHistoryComponent } from './components/main/locationrequests/vehicle-search-history/vehicle-search-history.component';
import { LiveMapComponent } from './components/main/live-map/live-map.component';
import { HistoryMapComponent } from './components/main/vehivles/history-map/history-map.component';
import { PoliceComplainsComponent } from './components/main/police-complains/police-complains.component';


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
    InquiryComponent,
    NotificationsComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddInquiryComponent,
    PublicContainerComponent,
    LandingContainerComponent,
    Home2Component,
    VendorsComponent,
    PoliceDashboardComponent,
    MaintenanceDashboardComponent,
    VendorDashboardComponent,
    AnalyticsComponent,
    AdminDashboardComponent,
    UsersComponent,
    AllSubscriptionsComponent,
    AddNewPlanComponent,
    DashboardSwichComponent,
    PoliceRequestsComponent,
    PoliceNewRequestComponent,
    PoliceViewRequestComponent,
    PoliceLocationHistoryComponent,
    PoliceVehicleFootageComponent,
    SubscriptionComponent,
    VerificationCenterComponent,
    UserVerificationDetailsComponent,
    VehicleVerificationDetailsComponent,
    MediaWallComponent,
    OneVideoComponent,
    AddCommentComponent,
    PostsComponent,
    AddNewPostComponent,
    ViewPostComponent,
    LeaderboardComponent,
    VideoPlayerComponent,
    NewPostComponent,
    PoliceStationComponent,
    RequestDetailsPopupComponent,
    VehicleSearchHistoryComponent,
    LiveMapComponent,
    HistoryMapComponent,
    PoliceComplainsComponent

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
        MatButtonToggleModule,
        NgApexchartsModule,
        MatSnackBarModule,
        HttpClientModule,
        NgOptimizedImage,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
