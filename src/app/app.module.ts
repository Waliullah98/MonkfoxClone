import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsComponent } from './products/products.component';
import { PlacementComponent } from './placement/placement.component';
import { ContactComponent } from './contact/contact.component';
import { ApplyComponent } from './apply/apply.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamComponent,
    CatalogComponent,
    ProductsComponent,
    PlacementComponent,
    ContactComponent,
    ApplyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
