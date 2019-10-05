import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatSelectModule, MatIconModule],
  exports: [MatInputModule, MatSelectModule, MatIconModule]
})
export class MaterialAllImportModule {}
