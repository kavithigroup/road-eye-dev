import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-details-popup',
  templateUrl: './request-details-popup.component.html',
  styleUrls: ['./request-details-popup.component.sass']
})
export class RequestDetailsPopupComponent {
  isUpdateMode = false;
  updateForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RequestDetailsPopupComponent>,
    private api: ApiService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the update form with the current data
    this.updateForm = this.fb.group({
      incident_date: [data.incident_date || ''],
      incident_time: [data.incident_time || ''],
      district: [data.district || ''],
      location: [data.location || ''],
      reason: [data.reason || ''],
      vehicle_id: [data.vehicle_id || ''],
      type: [data.type || ''],
      color: [data.color || '']
    });
  }

  closePopup(): void {
    this.dialogRef.close();
  }

  toggleUpdateMode(): void {
    this.isUpdateMode = !this.isUpdateMode;
  }

  updateRequest(): void {
    const updatedData = this.updateForm.value;

    const changes: { [key: string]: any } = {};
    for (const key in updatedData) {
      if (updatedData[key] !== this.data[key]) {
        changes[key] = updatedData[key];
      }
    }

    if (Object.keys(changes).length === 0) {
      this.snackBar.open('No changes detected to update', 'Close', { duration: 3000 });
      return;
    }

    this.api.put(`/police-requests/update/${this.data.request_id}`, changes).subscribe(
      () => {
        this.snackBar.open('Request updated successfully', 'Close', { duration: 3000 });
        this.isUpdateMode = false;
        this.closePopup();
        this.router.navigate(['/police-requests']);
      },
      (error) => {
        this.snackBar.open('Failed to update request: ' + error.message, 'Close', { duration: 3000 });
      }
    );
  }

  deleteRequest(): void {
    if (confirm('Are you sure you want to delete this request?')) {
      this.api.delete(`/police-requests/delete/${this.data.request_id}`).subscribe(
        () => {
          this.snackBar.open('Request deleted successfully', 'Close', { duration: 3000 });
          this.closePopup();
          this.router.navigate(['/police-requests']);
        },
        (error) => {
          this.snackBar.open('Failed to delete request: ' + error.message, 'Close', { duration: 3000 });
        }
      );
    }
  }

  goToTrackingHistory(): void {
    this.closePopup();
    this.router.navigate(['/police-requests/view/history'], { state: { requestId: this.data.request_id } });
  }
}
