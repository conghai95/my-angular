import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create.component';
import { UserCreateRoutingModule } from './user-create-routing.module';
import { UserCreateService } from '../../service/user-create.service';


@NgModule({
  declarations: [UserCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserCreateRoutingModule
  ],
  providers: [UserCreateService]
})
export class UserCreateModule { }
