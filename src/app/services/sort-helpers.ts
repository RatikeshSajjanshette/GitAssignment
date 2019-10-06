import { SortOrder } from "./../models/user-sort-option.dto";

/**
 * @description Here,
 * 1. In GitHub REST api, we don't get full json response on single api call.
 * 2. Per page we can get maximum 100 results.
 * 3. So that we are doing sorting results for present page only.
 * 4. GitHub doesn't provide sorting on basis of Name & Rank through query params.
 *    so that we hve to implement it our own.
 *
 * 5. You can find details on "https://developer.github.com/v3/guides/traversing-with-pagination/#basics-of-pagination"
 */

export function sortStringFunction(
  sortOrder: SortOrder = SortOrder.ASC,
  value1: string = "",
  value2: string = ""
) {
  if (typeof value1 === "string" || value2 === "string") {
    value1 = value1.toLowerCase();
    value2 = value2.toLowerCase();
  }

  let comparison = 0;

  if (value1 < value2) {
    comparison = -1;
  }
  if (value1 > value2) {
    comparison = 1;
  }

  return sortOrder == SortOrder.DESC ? comparison * -1 : comparison;
}
