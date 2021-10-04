import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApplyComponent } from './apply/apply.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlacementComponent } from './placement/placement.component';
import { ProductsComponent } from './products/products.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:"home",
  component:HomeComponent
  
  },
  
  
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'apply',
    component:ApplyComponent

  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'catalog',
    component:CatalogComponent

  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'placement',
    component:PlacementComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
