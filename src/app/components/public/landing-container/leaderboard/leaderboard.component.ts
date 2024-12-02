import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'; // Assuming you have a service to make API calls

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.sass']
})
export class LeaderboardComponent implements OnInit {
  mostLikedPosts: any[] = [];
  mostViewedPosts: any[] = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Fetch top liked posts
    this.api.get('/post/leaderboard/liked').subscribe(response => {
      this.mostLikedPosts = response;
    }, error => {
      console.error('Error fetching most liked posts:', error);
    });

    // Fetch top viewed posts
    this.api.get('/post/leaderboard/viewed').subscribe(response => {
      this.mostViewedPosts = response;
    }, error => {
      console.error('Error fetching most viewed posts:', error);
    });
  }
}
