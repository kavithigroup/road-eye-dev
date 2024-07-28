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
    NewComplainComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
