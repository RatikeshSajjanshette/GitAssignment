import { Component, Input } from "@angular/core";

import { UserListWithCount } from "../../models/user.dto";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent {
  @Input()
  userListWithCount: UserListWithCount;
}
