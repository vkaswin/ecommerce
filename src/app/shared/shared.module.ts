import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SearchBoxComponent } from "./components/search-box/search-box.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, SearchBoxComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
