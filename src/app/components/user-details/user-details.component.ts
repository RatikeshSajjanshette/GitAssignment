import { Component, OnInit, Input } from "@angular/core";

import { User } from "../../models/user.dto";
import { UserRepoDetails } from "./../../models/user-repo-details.dto";
import { UserService } from "./../../services/user.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent implements OnInit {
  @Input()
  user: User;

  repoDetails: UserRepoDetails[] = [];

  isExpanded = false;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.userService
        .getRepoDetails(this.user.repos_url)
        .subscribe(repoDetails => (this.repoDetails = repoDetails));
    }
  }
}
