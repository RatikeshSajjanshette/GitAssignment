import { Component } from '@angular/core';
import { UserSortOption } from './models/user-sort-option.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onSearchTermChange(searchTerm: string): void {
    console.log("onSearchTermChange - ", searchTerm);

  }

  onSortOptionChange(sortOption: UserSortOption): void {
    console.log("onSortOptionChange - ", sortOption);
  }
}
