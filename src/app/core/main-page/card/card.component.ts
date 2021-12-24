import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApodModel } from '../shared/models/apod-model';
import { ApodService } from '../shared/services/apod.service';
// import { ApodModel } from '../shared/models/apod-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardDate: string = '';

  card: ApodModel = {} as ApodModel;

  constructor(private route: ActivatedRoute, private apod: ApodService) {}

  ngOnInit(): void {
    this.cardDate = this.route.snapshot.params.date;

    this.apod.getCardByDate(this.cardDate).subscribe((res) => (this.card = res!));
  }
}
