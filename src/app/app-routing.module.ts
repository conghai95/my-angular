import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: "user",
    loadChildren: () => UserModule,
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
