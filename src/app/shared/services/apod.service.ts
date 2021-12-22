import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApodModel } from '../models/apod-model';
import { Observable } from 'rxjs';
import { DEMO_URL, URL } from '../constants/const-values';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  constructor(private httpClient: HttpClient) {}

  fetchFakeResults(startDate?: string, endDate?: string): Observable<ApodModel[]> {
    const response = this.httpClient.get<ApodModel[]>(DEMO_URL);
    console.log('dates:', `{start: ${startDate}, end: ${endDate}}`);
    return response;
  }

  fetchResults(startDate: string, endDate: string): Observable<ApodModel[]> {
    const response = this.httpClient.get<ApodModel[]>(
      URL + `start_date=${startDate}&end_date=${endDate}`,
    );
    console.log(startDate, endDate);
    return response;
  }
}
