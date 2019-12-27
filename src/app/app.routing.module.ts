import { DetalheFuncionarioComponent } from './detalhe-funcionario/detalhe-funcionario.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';

const routes: Routes = [
  { path: '', redirectTo: 'funcionario', pathMatch: 'full' },
  { path: 'funcionario', component: ListaFuncionarioComponent },
  { path: 'adicionar', component: CriarFuncionarioComponent },
  { path: 'atualizar/:id', component: AtualizarFuncionarioComponent },
  { path: 'detalhes/:id', component: DetalheFuncionarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
