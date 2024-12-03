import { Component } from '@angular/core';

interface Photo {
  id: number;
  url: string;
  description: string;
}

@Component({
  selector: 'app-police-vehicle-footage',
  templateUrl: './police-vehicle-footage.component.html',
  styleUrls: ['./police-vehicle-footage.component.sass']
})
export class PoliceVehicleFootageComponent {

  photos: Photo[] = [
    
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7LM1gPvxP-ezuFTWdBmKf2mntiR4lgTO6Bhrj8IaLDPzwjplN-TU41rs8W44gCELlLQ&usqp=CAU', description: 'Footage 2' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7LM1gPvxP-ezuFTWdBmKf2mntiR4lgTO6Bhrj8IaLDPzwjplN-TU41rs8W44gCELlLQ&usqp=CAU', description: 'Footage 3' },
   
  ];

  selectedPhoto: Photo | null = null;

  ngOnInit() {
    // fetch the photos 
  }

  openPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }

}


