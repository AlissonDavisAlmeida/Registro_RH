import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { RegistroUsuario } from './RegistroInterface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit, OnDestroy {
  registros : RegistroUsuario[] = [];

  registroSubscription : Subscription = new Subscription();

  constructor(private registroService : RegistroUsuarioService) { }

  ngOnDestroy(): void {
    this.registroSubscription.unsubscribe();
  }

  // Na inicialização do componente é realizada a busca de todos os registros e a inscrição no Observable do Registro de Serviço
  ngOnInit(): void {
    this.registroService.buscarRegistroUsuarios();
    this.registroSubscription = this.registroService.registrosEmmit.subscribe((retorno) => {
      this.registros = retorno;
      console.log(this.registros);
    });
  }
}
