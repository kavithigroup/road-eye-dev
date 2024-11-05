import { Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddCommentComponent} from "../add-comment/add-comment.component";
import {ApiService} from "../../../../../services/api.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-one-video',
  templateUrl: './one-video.component.html',
  styleUrls: ['./one-video.component.sass']
})
export class OneVideoComponent {

  constructor(private dialog: MatDialog) {
  }

  addComment() {
    this.dialog.open(AddCommentComponent);
  }
}
