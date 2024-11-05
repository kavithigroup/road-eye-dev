import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-police-new-request',
  templateUrl: './police-new-request.component.html',
  styleUrls: ['./police-new-request.component.sass']
})
export class PoliceNewRequestComponent {

  types:string[] = ['car', 'Motorcycle','three-wheeler', 'van', 'bus', 'lorry',  'other'];

  colors: string[] = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'silver', 'grey', 'brown', 'orange', 'purple', 'pink', 'other'];

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

  vehicleColors: string[] = [
    'White', 'Black', 'Silver', 'Gray', 'Red',
    'Blue', 'Brown', 'Green', 'Beige', 'Yellow',
    'Gold', 'Orange', 'Purple', 'Maroon', 'Navy',
    'Teal', 'Bronze', 'Burgundy', 'Charcoal', 'Cream',
    'Cyan', 'Dark Blue', 'Dark Green', 'Gunmetal', 'Indigo',
    'Ivory', 'Khaki', 'Magenta', 'Mint Green', 'Olive',
    'Pearl', 'Pink', 'Platinum', 'Rose Gold', 'Rust',
    'Sand', 'Steel Blue', 'Tan', 'Turquoise', 'Wine',
    'Champagne', 'Copper', 'Forest Green', 'Hot Pink', 'Lavender',
    'Lime Green', 'Metallic Blue', 'Metallic Green', 'Metallic Red', 'Off-White',
    'Racing Green', 'Royal Blue', 'Sapphire', 'Sky Blue', 'Slate Gray'
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




