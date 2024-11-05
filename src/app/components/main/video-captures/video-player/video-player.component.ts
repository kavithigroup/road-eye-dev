import { Component, OnInit, OnDestroy } from '@angular/core';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.sass']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  private player?: Player; // Mark player as possibly undefined
  public startTime: number = 0;
  public endTime: number = 30; // default to 30 seconds

  ngOnInit(): void {
    this.player = videojs('video-player', {
      controls: true,
      autoplay: false,
      preload: 'auto'
    });
  }

  async cropVideo(): Promise<void> {
    if (this.player) {
      const videoElement = this.player.el().querySelector('video') as HTMLVideoElement;
      if (videoElement) {
        const start = this.startTime;
        const end = this.endTime;

        const blob = await this.getCroppedBlob(videoElement, start, end);
        if (blob) {
          const url = URL.createObjectURL(blob);

          // Update the player source to the cropped video
          this.player.src({ type: 'video/mp4', src: url });
          this.player.load();
          this.player.play();
        } else {
          console.error('Failed to crop video.');
        }
      }
    }
  }

  getCroppedBlob(videoElement: HTMLVideoElement, start: number, end: number): Promise<Blob | null> {
    const duration = end - start;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      return Promise.resolve(null);
    }

    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    return new Promise<Blob | null>((resolve) => {
      videoElement.currentTime = start;
      videoElement.onseeked = () => {
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'video/mp4');
      };
    });
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
    }
  }
}
