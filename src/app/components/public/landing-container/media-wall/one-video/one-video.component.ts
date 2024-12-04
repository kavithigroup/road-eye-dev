import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCommentComponent} from "../add-comment/add-comment.component";
import {ApiService} from "../../../../../services/api.service";
import {AuthService} from "../../../../../services/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-one-video',
  templateUrl: './one-video.component.html',
  styleUrls: ['./one-video.component.sass']
})
export class OneVideoComponent implements OnInit {
  videoId: number | undefined;
  videoDetails: any;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // Get 'id' from URL path parameter
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.videoId = Number(id);  // Convert the string id to a number
        console.log('Video ID:', this.videoId);
        this.fetchVideoDetails();  // Fetch video details after getting the id
      }
    });
  }

  fetchVideoDetails(): void {
    // Make sure to pass the 'videoId' to your API
    this.api.post('/post/one', {id: this.videoId}).subscribe(
      (response: any) => {
        this.videoDetails = response.body[0]; // Store the video details
        console.log('Video details:', this.videoDetails);
      },
      (error) => {
        console.error('Error fetching video details:', error);
      }
    );
  }
  addComment() {
    this.dialog.open(AddCommentComponent);
  }

  getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `Just now`;
    }
  }

  onVideoPlayed(item: any) {
    
  }
}
