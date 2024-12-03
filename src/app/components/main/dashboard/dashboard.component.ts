import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  // Card data
  totalPosts = 0;
  totalComplaints = 0;
  totalVehicles = 0;
  totalVideoCaptures = 0;

  // Table data
  displayedColumns: string[] = ['id', 'complaintTime', 'complaintDate', 'complaintSubject', 'status'];
  dataSource = new MatTableDataSource<any>([]);

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: this.handleDateClick.bind(this),
    events: [], // Will be populated with fetched events
  };

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.fetchDashboardData();
    this.fetchComplaints();
  }

  /**
   * Fetches counts for posts, complaints, vehicles, and video captures
   */
  fetchDashboardData() {
    const userId = this.auth.user?.user_id;

    if (userId) {
      this.api.get(`/counts/posts/by-user/${userId}`).subscribe(
        (response: any) => {
          this.totalPosts = response.post_count;
        },
        (error) => console.error('Error fetching posts count:', error)
      );

      this.api.get(`/counts/complaints/by-user/${userId}`).subscribe(
        (response: any) => {
          this.totalComplaints = response.complaint_count;
        },
        (error) => console.error('Error fetching complaints count:', error)
      );

      this.api.get(`/counts/vehicles/by-user/${userId}`).subscribe(
        (response: any) => {
          this.totalVehicles = response.vehicle_count;
        },
        (error) => console.error('Error fetching vehicles count:', error)
      );

      this.api.get(`/counts/videos/by-user/${userId}`).subscribe(
        (response: any) => {
          this.totalVideoCaptures = response.video_count;
        },
        (error) => console.error('Error fetching video captures count:', error)
      );
    }
  }

  /**
   * Fetches complaints for the logged-in user
   */
  fetchComplaints() {
    const userId = this.auth.user?.user_id;

    if (userId) {
      this.api.post('/complain/user', { user: userId }).subscribe(
        (complaints: any) => {
          this.dataSource.data = complaints; // Use MatTableDataSource to set data
        },
        (error) => {
          console.error('Error fetching complaints:', error);
        }
      );
    }
  }

  handleDateClick(arg: DateClickArg) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
