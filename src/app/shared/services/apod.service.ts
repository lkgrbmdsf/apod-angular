import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodModel } from '../models/apod-model';
import { URL } from '../constants/const-values';
import { map } from 'rxjs/operators';

@Injectable()
export class ApodService {
  startDate: string = '';

  endDate: string = '';

  constructor(private httpClient: HttpClient) {}

  fetchResults(startDate: string, endDate: string): Observable<ApodModel[]> {
    this.startDate = startDate;
    this.endDate = endDate;

    const response = this.httpClient.get<ApodModel[]>(
      URL + `start_date=${startDate}&end_date=${endDate}`,
    );
    return response;
  }

  getCardByDate(date: string) {
    return this.fetchResults(this.startDate, this.endDate).pipe(
      map((data) => data.find((card) => card.date === date)),
    );
  }
}
