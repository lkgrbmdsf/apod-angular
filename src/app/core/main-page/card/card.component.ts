import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApodModel } from '../shared/models/apod-model';
import { ApodService } from '../shared/services/apod.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardDate: string = '';

  isLoading: boolean = false;

  card: ApodModel = {} as ApodModel;

  @Input() list: ApodModel[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private apod: ApodService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.cardDate = this.route.snapshot.params.date;

    this.apod.getCardByDate(this.cardDate).subscribe((res) => {
      this.isLoading = false;
      this.card = res!;
    });
  }

  goBack() {
    this.router.navigate(['/apod']);
  }
}
