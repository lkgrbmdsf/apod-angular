import { Component, Input } from '@angular/core';
import { ApodModel } from 'src/app/shared/models/apod-model';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss'],
})
export class ApodCardComponent {
  @Input() card?: ApodModel;

  imgUrl(card: ApodModel = {} as ApodModel): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = card.url.match(regExp);

    return card.media_type === 'image' ? card.url : `https://img.youtube.com/vi/${match![7]}/3.jpg`;
  }
}
