import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.sass']
})
export class NewComplainComponent {

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


}
