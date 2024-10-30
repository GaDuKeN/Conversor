import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConvercaoDiretaComponent } from './convercao-direta/convercao-direta.component';
import { HistoricoComponent } from './historico/historico.component';
import { ListaMoedasComponent } from './lista-moedas/lista-moedas.component';
const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'direta', component: ConvercaoDiretaComponent},
  { path: 'moedas', component: ListaMoedasComponent},
  { path: 'historico', component: HistoricoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 