import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../services/api.service";
import {AuthService} from "../../../../services/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.sass']
})
export class NewComplainComponent {


  form = new FormGroup({
    district: new FormControl(),
    police_station: new FormControl(),
    type: new FormControl(),
    subject: new FormControl(),
    contact : new FormControl(),
    complain: new FormControl(),
    proof: new FormControl(),
    name: new FormControl(),
    nic: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),

  })


  error?: string;

  constructor(
    private api: ApiService,
    protected auth: AuthService,
    private snackBar: MatSnackBar
  ) {}



  districts: string[] = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale',
    'Nuwara Eliya', 'Galle', 'Hambantota', 'Matara',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
    'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa',
    'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle',
    'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya',
    'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee'
  ];

  policeStations: string[] = [
    'Agalawatta', 'Ahangama', 'Akkaraipattu', 'Alawwa', 'Ambalangoda',
    'Ambalantota', 'Ampara', 'Anamaduwa', 'Angunakolapelessa', 'Anuradhapura',
    'Arachchikattuwa', 'Aralaganwila', 'Attanagalla', 'Avissawella',
    'Badalkumbura', 'Baddegama', 'Badulla', 'Bagawanthalawa', 'Balangoda',
    'Bandaragama', 'Bandarawela', 'Batticaloa', 'Beliatta', 'Bentota',
    'Beruwala', 'Bibila', 'Bogawanthalawa', 'Borella', 'Chavakachcheri',
    'Chilaw', 'Colombo Central', 'Colombo Fort', 'Colombo Harbour',
    'Colombo South', 'Dambulla', 'Dankotuwa', 'Dedigama', 'Dehiwala',
    'Deniyaya', 'Deraniyagala', 'Divulapitiya', 'Dompe', 'Dummalasuriya',
    'Elpitiya', 'Embilipitiya', 'Eppawala', 'Eravur', 'Galewela', 'Galle',
    'Gampaha', 'Gampola', 'Ginigathhena', 'Godakawela', 'Gokarella',
    'Hambantota', 'Haputale', 'Hatton', 'Hettipola', 'Homagama', 'Horana',
    'Hulftsdorp', 'Ja-Ela', 'Jaffna', 'Kadugannawa', 'Kaduwela', 'Kalmunai',
    'Kalutara', 'Kandy', 'Kataragama', 'Katugastota', 'Kegalle', 'Kelaniya',
    'Kilinochchi', 'Kinniya', 'Kiribathgoda', 'Kirindiwela', 'Kochchikade',
    'Kolonnawa', 'Kollupitiya', 'Kosgama', 'Kurunegala', 'Madampe',
    'Maharagama', 'Mannar', 'Maradana', 'Matale', 'Matara', 'Matugama',
    'Mawanella', 'Medirigiriya', 'Minuwangoda', 'Mirihana', 'Monaragala',
    'Mount Lavinia', 'Mutur', 'Nallur', 'Nawalapitiya', 'Negombo',
    'Nikaweratiya', 'Nittambuwa', 'Nugegoda', 'Nuwara Eliya', 'Panadura',
    'Peliyagoda', 'Piliyandala', 'Pottuvil', 'Pugoda', 'Puttalam', 'Ragama',
    'Rambukkana', 'Ratnapura', 'Seeduwa', 'Tangalle', 'Tissamaharama',
    'Trincomalee', 'Udugama', 'Valachchenai', 'Vavuniya', 'Wadduwa',
    'Wattala', 'Welikada', 'Welimada', 'Wellawaya', 'Yakkala'
  ];




  submit() {
    if (this.form.invalid)
      return;
    let d: any = this.form.value
    d["user"] = this.auth.user?.user_id
    d["contact"] = this.auth.user?.phone
    d["nic"] = this.auth.user?.nic
    d["email"] = this.auth.user?.email
    d["name"] = this.auth.user?.first_name
    console.log(d);
    this.api.post("/complain/create/", this.form.value).subscribe(httpResponse => {
      this.error = httpResponse.body
      if (this.error === "ok"){

        this.snackBar.open('Complaint submitted successfully!', 'Close', {
          duration: 3000, // The duration the message will be displayed (in milliseconds)
          verticalPosition: 'top', // Position at the top of the screen
          horizontalPosition: 'center', // Position in the center of the screen
        })
      }

    })
  }
}
