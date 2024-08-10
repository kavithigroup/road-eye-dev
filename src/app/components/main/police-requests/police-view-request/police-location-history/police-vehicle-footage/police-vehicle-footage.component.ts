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
    { id: 1, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7LM1gPvxP-ezuFTWdBmKf2mntiR4lgTO6Bhrj8IaLDPzwjplN-TU41rs8W44gCELlLQ&usqp=CAU/j+lKsRgbi6MhH99alxA9NftVgh/wDsJ8DP0qtu2eDH+bPkrH8q8sOEb8LV8cK34T8v1oUQs9O4h2rwynLLklZEI3MQK81xHGxaxjXEUspXLBMHUD8xTK3hbjtaYiBEGSNIBpJd4FdLEiAJ8KtKiWwvHdsbzEezJsgfhILH4xRHD+2+LRlLYu+ygiRm3E6j0pV/05c5sKs/6eI+8KZSlS4PSP8A8mWgNLt4+IU/U1Bv2pp/7j8Y/OvPl4RG7UVhcPaTVrauPEn9aVCs0uK/aU5932vxYx8qUYvtriLm926B0UlR9ajduYJlaLbW3KwDuoI/3f3NIS6xqaKCxi/aG6f8y8fO4361dw3imZ1NwtlnUks0jy50t4dhPauEAJk6mNAOZr0NLKBQoVYUQNBsKLEKbmHwNzRO4eqqRr4iIoE8KdJazeVh0nK3odDWkAHIAeQFTHlQOzO2e0d633WE/wA2lNML2nLQCEB8SwHrEUZctIwhkU+YFKMV2ftnW2Sp6bj+lAh7bx7sJyKfJ/1FdbFN/pN8GQ/nWPfB4iyZWSOqnT4irsP2iuLoRPyNArNHiMc8GLNyYMe5uRH4qF4BZa0hDDU68vnVWG4/bb3tPPSmC4pW2NHoC4Xrn4BHnV2brQ2euFjQFlzRQtywp5VC4zDYTQ1zE3JiKYiVzBrS+7wq2Tqi+lHLfbmK+mgZkMRjcReOrMR0Gn03orD9lcU2ptMq7yRWv4Xw5LGtsQ34ufrT+1xm8PvA+YpEd1Hm9vs5dU6FfjNPsDw8rBZsxHp8K2H+NSO/aRvhFffbMM3vYeP5TQUsiECpUxT1BgzyuL86ut4HBttccfA/pQVujOipVp/8AsNtdb0/pXD2WU7XT8V/rSHaM0DX0Vom7KNyuj4qf1qi52YvjbKfjH1oASCpA1biMMyEhhqPEVWlsmgZ9NRJr5wRUJoA4xqDNUXqBNAiRNcZ6gDNRcUASd6+FyKoSpmgZMXTXxu1XXDTAvXEGuvdnRgCPGh6lNAAmK4apkr3fpSvE8Ovj3QrDwMH50+Y1NKBUY+7cxKboQPKhLnELvUD4VunPKq2tLzAPwFMVGFONun73yFRbEXD99v7+FbxbCfhX0FXLaUbAegoCjzsrcP4j61O3gbp+6x+Br0IrXxQ0A0YNOD3j/lkecCi7XZy6feKr/fhWuFs132PjSsKAuG4MWUCjfmepooOakyxXQKAJK1TZqoeuTQMtzV8XquaITAXWEhfmP1oJKM9C4vCW395QT12PrTW3wW+2yDT+Jf1qX+A39ZUf8hQIyWI4J+Bvg360EUvWjsy+I1FbVOE3DMwI31qxeG2x/5HIHgN6YWZHD8bcbwfLSmmH44p97T5Uw4jwfBMO6twH8SwPkazOJ4K6nuNmHQ6H1FFC2RokxKnY103Kxed7Zgyp8DRdnirg66/KgZpXYVWTS6xxQNRAxANMD//2Q==', description: 'Footage 1' },
    { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7LM1gPvxP-ezuFTWdBmKf2mntiR4lgTO6Bhrj8IaLDPzwjplN-TU41rs8W44gCELlLQ&usqp=CAU', description: 'Footage 2' },
    { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP7LM1gPvxP-ezuFTWdBmKf2mntiR4lgTO6Bhrj8IaLDPzwjplN-TU41rs8W44gCELlLQ&usqp=CAU', description: 'Footage 3' },
   
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


