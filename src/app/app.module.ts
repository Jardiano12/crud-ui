import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';
import { DetalheFuncionarioComponent } from './detalhe-funcionario/detalhe-funcionario.component';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AtualizarFuncionarioComponent } from './atualizar-funcionario/atualizar-funcionario.component';
import {AppRoutingModule} from './app.routing.module';
import { LoginComponent } from './login/login.component';
import {HttpInterceptorService} from './login/auth/HttpInterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    CriarFuncionarioComponent,
    DetalheFuncionarioComponent,
    ListaFuncionarioComponent,
    AtualizarFuncionarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
