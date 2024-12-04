import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service'; // Assuming you have a service to make API calls
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-media-wall',
  templateUrl: './media-wall.component.html',
  styleUrls: ['./media-wall.component.sass']
})
export class MediaWallComponent implements OnInit {
  post: {
    id: number;
    title: string;
    video_link: string;
    likes: number;
    comments: number;
    description: string;
    views: number;
    showDetails: boolean;
    date :string;
  }[] = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    this.api.get('/post/all')
      .subscribe(httpResponse => {
        const posts = httpResponse;  // Make sure to access the 'body' if it's wrapped
        console.log(httpResponse)
        this.post = posts.map((item: any) => ({
          id: item.id,
          title: item.title,
          video_link: item.video_link,
          likes: item.likes,
          views: item.views,
          comments: item.comments || 0, // Handle missing 'comments' gracefully
          description: item.description,
          showDetails: false,
          date: item.date_time
        }));
        console.log(this.post);
      }, error => {
        console.error('Error fetching posts:', error);
      });
  }


  toggleDetails(postId: number): void {
    const post = this.post.find(item => item.id === postId);
    if (post) {
      post.showDetails = !post.showDetails;
    }
  }

  // Handle like button click
  likePost(post: any): void {
    this.api.put(`/post/like/${post.id}`, { id: post.id })
      .subscribe(() => {
        post.likes += 1; // Update likes on the front end immediately
      }, error => {
        console.error('Error liking post:', error);
      });
  }

  // Handle video view increment
  onVideoPlayed(post: any): void {
    this.api.put(`/post/view/${post.id}`, { id: post.id })
      .subscribe(() => {
        post.views += 1; // Update views on the front end immediately
      }, error => {
        console.error('Error updating views:', error);
      });
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

  sharePost(post: any): void {
    console.log('Sharing post:', post);
  }
}
