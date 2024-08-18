export const getListNumberOfPagination = (
  currentPageIndex: number,
  pageCount: number,
  maxPageNumbersToShow: number = 5
): number[] => {
  const pageIndex = currentPageIndex;

  // Determine the start and end of the page numbers to display
  const pageNumbersToShow = maxPageNumbersToShow;
  const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);

  let startPage = Math.max(pageIndex - halfPageNumbersToShow, 0);
  let endPage = Math.min(startPage + pageNumbersToShow - 1, pageCount - 1);

  // Adjust startPage if we're near the end of the page range
  if (endPage - startPage < pageNumbersToShow - 1) {
    startPage = Math.max(endPage - pageNumbersToShow + 1, 0);
  }

  const pageNumbers = [...Array(endPage - startPage + 1)].map(
    (_, i) => startPage + i
  );

  return pageNumbers;
};
