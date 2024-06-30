import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "./components/public/public.component";

const routes: Routes = [
  {path: "", component: PublicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
