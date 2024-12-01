import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-details-popup',
  templateUrl: './request-details-popup.component.html',
  styleUrls: ['./request-details-popup.component.sass']
})
export class RequestDetailsPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
