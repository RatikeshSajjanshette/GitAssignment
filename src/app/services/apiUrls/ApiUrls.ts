import { environment } from '../../../environments/environment';

export class ApiUrls {

  static SEARCH = (searchTerm: string, perPageResults: number, page : number) => `${environment.baseUrl}search/users?q=${searchTerm}&per_page=${perPageResults}&page=${page}`;
}

// backEndApiBaseUrl: 'http://api.github.com/'

// https://api.github.com/search/users?q=ra

// https://api.github.com/users/ratikeshs/repos

// https://api.github.com/users/ratikeshs/followers

// https://api.github.com/repos/ratikeshs/Angular-Assignment/languages

// open_issues_count: 0
// watchers: 0
// forks_count: 0
