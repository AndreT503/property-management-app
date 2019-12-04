import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ManagerComponent } from './manager.component'
import { ManagerHomeComponent } from '../manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { MaterialModule } from '../material.module'
import { NgModule } from '@angular/core'
import { RentLookupComponent } from './rent-lookup/rent-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'

@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    RentLookupComponent,
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
})
export class ManagerModule {}
