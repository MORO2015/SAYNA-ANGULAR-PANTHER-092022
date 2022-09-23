import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeComponent } from './components/enigme/enigme.component';
import { EshopComponent } from './components/eshop/eshop.component';
import { HomeComponent } from './components/home/home.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { WakandaComponent } from './components/wakanda/wakanda.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'enigme', component: EnigmeComponent },
  { path: 'wakanda', component: WakandaComponent },
  { path: 'eshop', component: EshopComponent },
  { path: 'compte', component: MonCompteComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
