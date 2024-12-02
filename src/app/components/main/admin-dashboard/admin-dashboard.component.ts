import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';  // Assuming this service exists
import { AuthService } from '../../../services/auth.service';  // Assuming this service exists

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {
  // Dynamic card data
  totalUsers = 0;
  totalComplaints = 0;
  totalVehicles = 0;
  totalEarnings = 250000;  // Hardcoded value

  // Table data
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];
  dataSource: any[] = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    this.fetchDashboardData();  // Fetch dynamic counts
    this.fetchPayments();  // Fetch table data (Recent Payments)
  }

  /**
   * Fetches counts for total users, complaints, and vehicles
   */
  fetchDashboardData() {
    // Use the appropriate API calls for getting total counts
    this.api.get('/counts/complaints/total').subscribe(
      (response: any) => {
        this.totalComplaints = response.total_complaint_count;
      },
      (error) => console.error('Error fetching total complaints count:', error)
    );

    this.api.get('/counts/users/total').subscribe(
      (response: any) => {
        this.totalUsers = response.total_user_count;
      },
      (error) => console.error('Error fetching total users count:', error)
    );

    this.api.get('/counts/vehicles/total').subscribe(
      (response: any) => {
        this.totalVehicles = response.total_vehicle_count;
      },
      (error) => console.error('Error fetching total vehicles count:', error)
    );
  }

  /**
   * Fetches the payments for the table (hardcoded section)
   */
  fetchPayments() {
    this.api.get('/payments/recent').subscribe(
      (payments: any) => {
        this.dataSource = payments;
      },
      (error) => console.error('Error fetching recent payments:', error)
    );
  }
}
