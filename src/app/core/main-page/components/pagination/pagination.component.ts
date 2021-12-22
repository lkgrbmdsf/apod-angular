import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() perPage: number = 0;

  @Input() totalPages: number = 0;

  currentPageNumber: number = 1;

  @Output() currentPage = new EventEmitter();

  nextPage() {
    this.currentPage.emit(++this.currentPageNumber);
  }

  prevPage() {
    this.currentPage.emit(--this.currentPageNumber);
  }
}
