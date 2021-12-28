import { Injectable } from '@angular/core';

@Injectable()
export class PagerService {
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    return {
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
    };
  }
}
