export enum SortType {
  ASC = "asc",
  DESC = "desc"
}

export interface UserSortOptionValueConfig {
  key: string;
  sortType: SortType;
}

export interface UserSortOption {
  label: string;
  value: UserSortOptionValueConfig;
}
