import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProgettiComponent } from './pages/lista-progetti/lista-progetti.component';
import { DettaglioProgettoComponent } from './pages/dettaglio-progetto/dettaglio-progetto.component';

const routes: Routes =  [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListaProgettiComponent },
  { path: 'home/:idProgetto', component: DettaglioProgettoComponent },
  /* { path: 'heroes', component: HeroesComponent } */
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
