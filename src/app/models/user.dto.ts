export interface UserListWithCount {
  total_count: number;
  items?: User[];
}

export interface User {
  avatar_url: string;
  id: number;
  login: string;
  html_url: string;
  repos_url: string;
}
