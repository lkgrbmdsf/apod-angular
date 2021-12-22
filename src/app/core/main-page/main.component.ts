import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TODAYS_DATE } from 'src/app/shared/constants/const-values';
import { ApodModel } from 'src/app/shared/models/apod-model';
import { ApodService } from 'src/app/shared/services/apod.service';
import { PagerService } from 'src/app/shared/services/pager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  apodList: ApodModel[] = [];

  totalPagesCount: number = 0;

  currentPageNumber: number = 1;

  currentPageResults: ApodModel[] = [];

  pager: any = {};

  constructor(
    private fetch: ApodService,
    private fb: FormBuilder,
    private pagerService: PagerService,
  ) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.getData(this.currentPageNumber);
  }

  getData(pageNo: number) {
    this.currentPageNumber = pageNo;
    this.fetch
      .fetchFakeResults(this.formStartDate.value, this.formEndDate.value)
      .subscribe((response) => {
        this.apodList = response;

        this.setPagination(this.currentPageNumber);

        this.totalPagesCount = this.pager.totalPages;

        this.currentPageResults = this.pageArraySplit(
          response,
          this.pager.currentPage,
          this.pager.pageSize,
        );

        console.log();
      });
  }

  setPagination(pageNo: number) {
    pageNo = Number(pageNo);
    this.currentPageNumber = pageNo;
    this.pager = this.pagerService.getPager(this.apodList.length, pageNo, this.formPerPage.value);
  }

  pageArraySplit(array: ApodModel[], pageNo: number, perPage: number) {
    let startIndex = (pageNo - 1) * perPage;
    let endingIndex = startIndex + perPage;
    return array.slice(startIndex, endingIndex);
  }

  datesForm = this.fb.group({
    startDate: ['2021-12-15'],
    endDate: [TODAYS_DATE],
    perPage: [2],
  });

  pageController(currPg: number) {
    this.getData(currPg);
  }

  get formStartDate(): FormGroup {
    return this.datesForm.get('startDate') as FormGroup;
  }

  get formEndDate(): FormGroup {
    return this.datesForm.get('endDate') as FormGroup;
  }

  get formPerPage(): FormGroup {
    return this.datesForm.get('perPage') as FormGroup;
  }
}
