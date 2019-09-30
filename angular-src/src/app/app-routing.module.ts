import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserNavComponent } from "./components/user-nav/user-nav.component";

const routes: Routes = [{ path: "profile", component: UserNavComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
