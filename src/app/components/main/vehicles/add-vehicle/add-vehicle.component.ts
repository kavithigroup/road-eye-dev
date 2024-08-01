import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../services/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.sass']
})
export class AddVehicleComponent {
  form = new FormGroup({
    vehicle_number: new FormControl(),
    brand: new FormControl(),
    model: new FormControl(),
    yom: new FormControl(),
    type: new FormControl(),
    millage: new FormControl(),
    color: new FormControl(),
    owner: new FormControl(),
    absolute_owner: new FormControl(),
  })

  lease: boolean = false
  error?: string

  constructor(private api: ApiService, public dialogRef: MatDialogRef<AddVehicleComponent>, private auth: AuthService) {
  }

  submit() {
    if (this.form.invalid)
      return;
    let d: any = this.form.value
    d["user"] = this.auth.user?.user_id
    this.api.post("/vehicle/add/", this.form.value).subscribe(httpResponse => {
      this.error = httpResponse.body
      if (this.error === "ok")
        this.dialogRef.close()
    })
  }

  setOwner() {
    this.form.controls.owner.setValue(`${this.auth.user?.first_name} ${this.auth.user?.last_name}`)
  }
}
