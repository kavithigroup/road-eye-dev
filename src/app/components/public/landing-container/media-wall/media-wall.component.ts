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
  }[] = [];

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    this.api.get('/post/all')
      .subscribe(httpResponse => {
        const posts = httpResponse.body || [];  // Make sure to access the 'body' if it's wrapped
        this.post = posts.map((item: any) => ({
          id: item.id,
          title: item.title,
          video_link: item.video_link,
          likes: item.likes,
          views: item.views,
          comments: item.comments || 0, // Handle missing 'comments' gracefully
          description: item.description,
          showDetails: false
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
    this.api.put('/post/like', { id: post.id })
      .subscribe(() => {
        post.likes += 1; // Update likes on the front end immediately
      }, error => {
        console.error('Error liking post:', error);
      });
  }

  // Handle video view increment
  onVideoPlayed(post: any): void {
    this.api.put('/post/view', { id: post.id })
      .subscribe(() => {
        post.views += 1; // Update views on the front end immediately
      }, error => {
        console.error('Error updating views:', error);
      });
  }

  sharePost(post: any): void {
    console.log('Sharing post:', post);
  }
}
