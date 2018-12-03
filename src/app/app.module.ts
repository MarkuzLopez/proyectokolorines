import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//para importar los servicios se tiene que importar ((SERVIDORES-REST))
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { BuscarComponent } from './components/pages/buscar/buscar.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { ContactosComponent } from './components/pages/contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BuscarComponent,
    BlogComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
