import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

export interface InquiryItem {
  id: number;
  userid: number;
  title: string;
  description: string;
  attachment?: string;
  reply?: string;
}

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.sass'],
})
export class InquiryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'reply', 'action'];
  dataSource: InquiryItem[] = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit() {
    this.fetchInquiries();
  }

  fetchInquiries() {
    const userId = this.auth.user?.user_id;
    if (userId) {
      this.api.post('/inquiry/user', { userid: userId }).subscribe(
        (response: InquiryItem[]) => {
          this.dataSource = response;
        },
        (error) => {
          console.error('Error fetching inquiries:', error);
        }
      );
    }
  }

  viewDetails(id: number) {
    console.log(`View details for Inquiry ID: ${id}`);
    // Implement navigation if needed
  }


}
