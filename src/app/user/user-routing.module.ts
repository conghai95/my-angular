import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateModule } from './screen/user-create/user-create.module';
import { UserListModule } from './screen/user-list/user-list.module';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "user-list",
        loadChildren: () => UserListModule,
        data: { preload: true }
      },
      {
        path: "user-create",
        loadChildren: () => UserCreateModule,
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
