import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { HomeComponent } from './components/home/home.component';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { ScrolBarComponent } from './components/scrol-bar/scrol-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AsideComponent } from './components/aside/aside.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    MonCompteComponent,
    HomeComponent,
    EnigmeComponent,
    WakandaComponent,
    EshopComponent,
    ScrolBarComponent,
    CartComponent,
    ProductsComponent,
    AsideComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
