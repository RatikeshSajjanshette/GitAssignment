import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { distinctUntilChanged } from "rxjs/internal/operators/distinctUntilChanged";
import { filter } from "rxjs/internal/operators/filter";

import { UserSortOption, SortType } from "./../../models/user-sort-option.dto";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output()
  searchTermChange: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  sortOptionChange: EventEmitter<UserSortOption> = new EventEmitter<
    UserSortOption
  >();

  readonly searchInputMinLimit = 3;

  readonly sortType = SortType;

  readonly selectedSortOption = {
    label: "Name",
    value: {
      key: "name",
      sortType: SortType.ASC
    }
  };

  readonly sortOptions: UserSortOption[] = [
    this.selectedSortOption,
    {
      label: "Name",
      value: {
        key: "name",
        sortType: SortType.DESC
      }
    },
    {
      label: "Rank",
      value: {
        key: "rank",
        sortType: SortType.ASC
      }
    },
    {
      label: "Rank",
      value: {
        key: "rank",
        sortType: SortType.DESC
      }
    }
  ];

  searchInput = new FormControl();

  sortInput = new FormControl(this.selectedSortOption);

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter(
          (searchTerm: string) =>
            (searchTerm || "").length >= this.searchInputMinLimit
        )
      )
      .subscribe(searchTerm => this.searchTermChange.next(searchTerm));
    this.sortInput.valueChanges.subscribe(sortOption =>
      this.sortOptionChange.next(sortOption)
    );
  }
}
