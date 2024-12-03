import {Component, OnInit} from '@angular/core';
import {AddVehicleComponent} from "../vehicles/add-vehicle/add-vehicle.component";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../../services/api.service";
import {AuthService} from "../../../services/auth.service";
import {UserVerificationDetailsComponent} from "./user-verification-details/user-verification-details.component";
import {VehicleVerificationDetailsComponent} from "./vehicle-verification-details/vehicle-verification-details.component";

export interface userVerification {
  date: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface vehicleVerification {
  date: string;
  vehicleNumber: string;
  owner: string;
  leasing: string;
}



@Component({
  selector: 'app-verification-center',
  templateUrl: './verification-center.component.html',
  styleUrls: ['./verification-center.component.sass']
})
export class VerificationCenterComponent implements OnInit {
  displayedColumnsVehicles: string[] = ['date', 'vehicleNumber', 'owner', 'leasing', 'action'];
  protected dataSourceVehicle: any;

  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService) {
  }

  ngOnInit() {
    this.fetchNonVerifiedVehicles(); //
  }

  viewVerificationDetails() {
    this.dialog.open(UserVerificationDetailsComponent).afterClosed().subscribe(_ => {
      this.ngOnInit()
    })
  }viewVehicleVerificationDetails() {
    this.dialog.open(VehicleVerificationDetailsComponent).afterClosed().subscribe(_ => {
      this.ngOnInit()
    })
  }

  private fetchNonVerifiedVehicles() {
    this.api.get('/nonverify-vehicle').subscribe(
      (response: any) => {
        console.log(response)
        this.dataSourceVehicle = response.map((v: any) => ({
          date: v.created_at,
          vehicleNumber: v.vehicle_number,
          file:v.file_path,
          owner: v.user || 'N/A',
          leasing: v.status || 'N/A',
        }));
        console.log(this.dataSourceVehicle)
      },
      (error) => {
        console.error('Error fetching vehicles:', error);
      }
    );
  }

  Verify(vehicleNumber: any) {

    const data = { vehicle_number: vehicleNumber };

    this.api.put('/verify-vehicle', data).subscribe(
      (response: any) => {
        console.log('Vehicle verified:', response);
        // Optionally, refresh the data after successful verification
        this.fetchNonVerifiedVehicles(); // Re-fetch the updated data
      },
      (error) => {
        console.error('Error verifying vehicle:', error);
      }
    );
  }

  downloadFile(filePath: string) {
    // Check if the filePath is valid
    if (filePath) {
      // Create an invisible <a> element to trigger the download
      const link = document.createElement('a');
      link.href = "https://storage.cloud.google.com/road-eye/"+filePath;
      // link.download = filePath.split('/').pop();

      // Trigger the click event to start the download
      link.click();
    } else {
      console.error('Invalid file path');
    }
  }
}

