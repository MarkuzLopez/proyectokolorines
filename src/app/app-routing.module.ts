import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import { BuscarComponent } from './components/pages/buscar/buscar.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactosComponent } from './components/pages/contactos/contactos.component';

    const appt_routes: Routes = [ 
        { path: '', component: PortafolioComponent },
        { path: 'about', component: AboutComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'contacto', component: ContactosComponent },
        { path: 'item/:id', component: ItemComponent },
        { path: 'search/:termino', component: BuscarComponent },
        { path: '**', pathMatch: 'full', redirectTo: '' }
    ];
  
  @NgModule({ 
      imports: [
          RouterModule.forRoot(appt_routes, {useHash: true})
      ], 
      exports: [ 
          RouterModule
      ]
  })

  export class AppRoutingModule { }