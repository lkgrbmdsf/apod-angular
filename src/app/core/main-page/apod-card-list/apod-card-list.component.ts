import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApodModel } from 'src/app/shared/models/apod-model';

@Component({
  selector: 'app-apod-card-list',
  templateUrl: './apod-card-list.component.html',
  styleUrls: ['./apod-card-list.component.scss'],
})
export class ApodCardListComponent {
  @Input() card: ApodModel = {} as ApodModel;

  constructor(public router: Router) {}

  imgUrl(card: ApodModel = {} as ApodModel): string {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = card.url.match(regExp);

    return card.media_type === 'image' ? card.url : `https://img.youtube.com/vi/${match![7]}/3.jpg`;
  }

  navigateToCard(date: string) {
    this.router.navigate(['/apod', date]);
  }
}
