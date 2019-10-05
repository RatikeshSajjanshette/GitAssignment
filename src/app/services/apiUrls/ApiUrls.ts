import { environment } from "../../../environments/environment";

export class ApiUrls {
  static SEARCH = (searchTerm: string, perPageResults: number, page: number) =>
    `${environment.baseUrl}search/users?q=${searchTerm}&per_page=${perPageResults}&page=${page}`;
}
