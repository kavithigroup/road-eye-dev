import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../../services/api.service';
import { AuthService } from '../../../../services/auth.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-inquiry',
  templateUrl: './add-inquiry.component.html',
  styleUrls: ['./add-inquiry.component.sass']
})
export class AddInquiryComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    description: new FormControl('', [Validators.required]),
    attachment: new FormControl(''),
  });

  isSubmitting: boolean = false;
  errorMessage?: string;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<AddInquiryComponent>
  ) {}

  ngOnInit(): void {}

  get formControls() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid) {
      this.snackBar.open("Invalid Input", "Close", { duration: 5000 });
      return;
    }

    const userId = this.auth.user?.user_id;
    if (!userId) {
      this.snackBar.open("User ID is not available. Please log in again.", "Close", { duration: 5000 });
      return;
    }

    this.isSubmitting = true;
    const inquiryData = {
      ...this.form.value,
      userid: userId, // Ensured to be defined
      reply: null,    // Explicitly set reply to null
    };

    this.api.post("/inquiry/create", inquiryData).subscribe(
      (httpResponse) => {
        if (httpResponse?.status === "success") {
          this.snackBar.open("Inquiry created successfully", "Close", { duration: 5000 });
          this.router.navigateByUrl("/inquiry").then();
        } else {
          this.snackBar.open(httpResponse?.message || "Error while submitting inquiry", "Close", { duration: 5000 });
        }
        this.isSubmitting = false;
      },
      (error) => {
        this.errorMessage = error.error?.detail || "An error occurred while submitting the inquiry.";
        this.isSubmitting = false;
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
