import { SortOrder } from "./../models/user-sort-option.dto";

export function sortStringFunction(
  sortOrder: SortOrder = SortOrder.ASC,
  value1: string = "",
  value2: string = ""
) {
  value1 = value1.toLowerCase();
  value2 = value2.toLowerCase();

  let comparison = 0;

  if (value1 < value2) {
    comparison = -1;
  }
  if (value1 > value2) {
    comparison = 1;
  }

  return sortOrder == SortOrder.DESC ? comparison * -1 : comparison;
}
