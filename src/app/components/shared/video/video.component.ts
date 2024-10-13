import {Component, input} from '@angular/core';
import {VgApiService, VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgOverlayPlayModule} from "@videogular/ngx-videogular/overlay-play";
import {VgBufferingModule} from "@videogular/ngx-videogular/buffering";
import {VgControlsModule} from "@videogular/ngx-videogular/controls";

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [
    VgCoreModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgControlsModule
  ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  videoUrl = input<string>('');
  api!: VgApiService;

  onPlayerReady(source: VgApiService) {
    this.api = source;
    const defaultMedia = this.api.getDefaultMedia();
    if (defaultMedia) {
      defaultMedia?.subscriptions.loadedMetadata.subscribe(this.autoPlay.bind(this));
    } else {
      console.error('Default media not available.');
    }
  }

  autoPlay() {
    this.api.play();
  }

}
