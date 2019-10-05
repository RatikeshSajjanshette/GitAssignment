import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { UserListWithCount } from "../models/user.dto";
import { UserRepoDetails } from "../models/user-repo-details.dto";
import { ApiUrls } from "./apiUrls/ApiUrls";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUserList(searchTerm: string): Observable<UserListWithCount> {
    return this.httpClient.get<UserListWithCount>(ApiUrls.SEARCH(searchTerm));
  }

  getRepoDetails(repoUrl: string): Observable<UserRepoDetails[]> {
    return this.httpClient.get<UserRepoDetails[]>(repoUrl);
  }
}
