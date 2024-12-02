import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  post: {
    id: number;
    title: string;
    video_link: string;
    likes: number;
    comments: number;
    description: string;
    views: number;
    showDetails: boolean; // Added flag for toggling post details visibility
  }[] = [];

  constructor(private dialog: MatDialog, private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    const userId = this.auth.user?.user_id;
    if (!userId) {
      console.error('User ID is undefined');
      return;
    }

    this.api.post('/post/user', { userid: userId })
      .subscribe(httpResponse => {
        this.post = httpResponse.body.map((item: any, index: number) => ({
          id: index + 1,
          title: item.title,
          video_link: item.video_link,
          likes: item.likes,
          views: item.views,
          comments: item.comments,
          description: item.description,
          showDetails: false // Initialize the flag to false
        }));
        console.log(this.post);
      }, error => {
        console.error('Error fetching posts:', error);
      });
  }

  // Toggle the visibility of post details
  toggleDetails(postId: number): void {
    const post = this.post.find(item => item.id === postId);
    if (post) {
      post.showDetails = !post.showDetails; // Toggle the flag
    }
  }

  sharePost(post: any): void {
    console.log('Sharing post:', post);
    // Add your share functionality here
  }
}
