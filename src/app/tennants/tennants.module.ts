import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TennantsRoutingModule } from './tennants-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'

@NgModule({
  declarations: [ProfileComponent, LogoutComponent, NavigationMenuComponent],
  imports: [CommonModule, TennantsRoutingModule],
})
export class TennantsModule {}
