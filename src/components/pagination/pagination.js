import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';


export const paginationEl = document.getElementById('tui-pagination-container');

export function makePagination(totalItems, totalPages) {
  const visiblePages = totalPages < 5 ? totalPages : 5;
  const options = {
    totalItems,
    itemsPerPage: 20,
    visiblePages,
    centerAlign: true,
  };

  const pagination = new Pagination(paginationEl, options);

  if (visiblePages <= 1) {
    paginationEl.style.display = 'none';
  } else {
    paginationEl.style.display = 'block';
  }

  return pagination;
}

export const ITEM_PER_PAGE = 12;
export function makeLibraryPagination(totalItems) {
  const visiblePages =
    totalItems / ITEM_PER_PAGE < 5 ? Math.ceil(totalItems / ITEM_PER_PAGE) : 5;
  const options = {
    totalItems,
    itemsPerPage: ITEM_PER_PAGE,
    visiblePages,
    centerAlign: true,
  };

  const pagination = new Pagination(paginationEl, options);

  if (visiblePages <= 1) {
    paginationEl.style.display = 'none';
  } else {
    paginationEl.style.display = 'block';
  }

  return pagination;
}