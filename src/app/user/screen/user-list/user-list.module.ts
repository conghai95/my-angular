import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserListService } from '../../service/user-list.service';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserListRoutingModule
  ],
  providers: [UserListService]
})
export class UserListModule { }
