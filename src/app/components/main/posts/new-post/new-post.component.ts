import {Component, OnInit} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../../../services/api.service";
import {AuthService} from "../../../../services/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {


  form = new FormGroup({
    video_link: new FormControl(),
    title: new FormControl(),
    description: new FormControl(),
  })


  videos: {
    video: string
    vehicle_number: string,
    reg_time: number

  }[] = []

  selectedVideo: string = '';
  error?: string

  constructor(private snackBar: MatSnackBar, private api: ApiService, private auth: AuthService, private route : Router ) {
  }

  ngOnInit() {
    this.api.post("/video-capture/user", {user: this.auth.user?.user_id}).subscribe(httpResponse => {
      this.videos = httpResponse.body
    })

  }

  submit() {
    if (this.form.invalid) {
      this.snackBar.open("Invalid Input: ", "close", {duration: 5000})
      return;
    }
    let d: any = this.form.value
    d["user"] = this.auth.user?.user_id
    this.api.post("/post/create/", this.form.value).subscribe(httpResponse => {
      this.error = httpResponse.body
      if (this.error === "ok"){
        this.route.navigateByUrl("/post").then()
      }else{
        this.snackBar.open( httpResponse.body, "close", {duration: 5000})
      }

    })
  }

}
