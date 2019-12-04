import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home/', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manager', loadChildren: './manager/manager.module#ManagerModule' },
  {
    path: 'administration',
    loadChildren: './administration/administration.module#AdministrationModule',
  },
  { path: 'public', loadChildren: './public/public.module#PublicModule' },
  { path: 'tennants', loadChildren: './tennants/tennants.module#TennantsModule' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
