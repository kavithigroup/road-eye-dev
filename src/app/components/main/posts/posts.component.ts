import { Component } from '@angular/core';

import {MatTableModule} from '@angular/material/table';


export interface Post {
  id: number;
  PostTime: string;
  PostDate: string;
  PostSubject: string;
  description: string;
}

const Post_DATA: Post[] = [
  { id: 1, PostTime: '14:30', PostDate: '2024-07-27', PostSubject: 'Subject', description: 'Complete' },
  { id: 2, PostTime: '15:00', PostDate: '2024-07-27', PostSubject: 'Subject', description: 'Complete' },
  { id: 3, PostTime: '16:15', PostDate: '2024-07-27', PostSubject: 'Subject', description: 'Complete' }
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent {

  displayedColumns: string[] = ['id', 'PostTime', 'PostDate', 'PostSubject', 'description', 'action'];
  dataSource = Post_DATA;


}
