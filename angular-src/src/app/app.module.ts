import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainNavComponent } from "./components/main-nav/main-nav.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserNavComponent } from './components/user-nav/user-nav.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, UserNavComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
