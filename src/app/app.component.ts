import { Component } from "@angular/core";

import { PageEvent } from "@angular/material/paginator/typings/paginator";

import { UserSortOption } from "./models/user-sort-option.dto";
import { UserListWithCount } from "./models/user.dto";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userListWithCount: UserListWithCount;
  searchTerm = "";
  length = 0;
  readonly perPageResults = 5;

  constructor(private userService: UserService) {}

  onSearchTermChange(searchTerm: string): void {
    console.log("onSearchTermChange - ", searchTerm);
    this.searchTerm = searchTerm;
    this.fetchUserList(this.searchTerm, this.perPageResults, 1);
  }

  onSortOptionChange(sortOption: UserSortOption): void {
    console.log("onSortOptionChange - ", sortOption);
  }

  onPageChange(pageEvent: PageEvent) {
    this.fetchUserList(
      this.searchTerm,
      this.perPageResults,
      pageEvent.pageIndex + 1
    );
  }

  fetchUserList(searchTerm: string, perPageResults: number, page: number) {
    this.userService
      .getUserList(searchTerm, perPageResults, page)
      .subscribe(userListWithCount => {
        this.userListWithCount = userListWithCount;
      });
  }

}
