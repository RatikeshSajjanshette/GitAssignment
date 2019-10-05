export enum SortOrder {
  ASC = "asc",
  DESC = "desc"
}

export interface UserSortOptionValueConfig {
  key: string;
  sortOrder: SortOrder;
}

export interface UserSortOption {
  label: string;
  value: UserSortOptionValueConfig;
}
