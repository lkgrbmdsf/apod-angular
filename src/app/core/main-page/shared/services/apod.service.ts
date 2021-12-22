import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodModel } from '../models/apod-model';
import { URL, DEMO_URL } from '../constants/const-values';

@Injectable({
  providedIn: 'root',
})
export class ApodService {
  constructor(private httpClient: HttpClient) {}

  fetchFakeResults(startDate?: string, endDate?: string): Observable<ApodModel[]> {
    const response = this.httpClient.get<ApodModel[]>(DEMO_URL);
    return response;
  }

  fetchResults(startDate: string, endDate: string): Observable<ApodModel[]> {
    const response = this.httpClient.get<ApodModel[]>(
      URL + `start_date=${startDate}&end_date=${endDate}`,
    );
    return response;
  }
}
