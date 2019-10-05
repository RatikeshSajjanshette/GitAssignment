import { Component } from "@angular/core";

import { UserSortOption } from "./models/user-sort-option.dto";
import { UserListWithCount } from './models/user.dto';
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userListWithCount: UserListWithCount;

  constructor(private userService: UserService) {}

  onSearchTermChange(searchTerm: string): void {
    console.log("onSearchTermChange - ", searchTerm);
    this.userService.getUserList(searchTerm).subscribe(userListWithCount => {
      this.userListWithCount = userListWithCount;
    });
  }

  onSortOptionChange(sortOption: UserSortOption): void {
    console.log("onSortOptionChange - ", sortOption);
  }
}
