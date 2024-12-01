import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.sass']
})
export class AddNewPostComponent {
  form = new FormGroup({
    title : new FormControl(),
    description : new FormControl(),

  })
constructor( private api: ApiService, private snackBar: MatSnackBar, private router : Router, private route : Router ){

}

  submit() {
    this.form.updateValueAndValidity()
    if (this.form.invalid) {
      this.snackBar.open("Invalid Input: " , "close", {duration: 5000})
      return;
    }
    this.api.post("/post/create", this.form.value).subscribe(httpResponse => {
      if(httpResponse.body === "ok"){
        this.router.navigateByUrl("/post").then()
      }else{
        this.snackBar.open( httpResponse.body, "close", {duration: 5000})
      }
    }, error => {

    })


  }
}
