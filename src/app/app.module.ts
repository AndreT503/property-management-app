import 'hammerjs'

import { AdministrationModule } from './administration/administration.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { BuildingRosterComponent } from './building-roster/building-roster.component'
import { FlexLayoutModule } from '@angular/flex-layout/typings'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { MaterialModule } from './material.module'
import { NgModule } from '@angular/core'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { PropertiesModule } from './properties/properties.module'
import { PublicModule } from './public/public.module'
import { SubContractorsModule } from './sub-contractors/sub-contractors.module'
import { TennantsModule } from './tennants/tennants.module'

@NgModule({
  declarations: [
    AppComponent,
    BuildingRosterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
