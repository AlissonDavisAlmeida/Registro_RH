import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { RegistroUsuario } from '../components/registro/registro/RegistroInterface';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService implements OnDestroy {
  registros : RegistroUsuario[] = [];

  // Subject para emitir o array de registro de usuários
  registrosEmmit = new Subject<RegistroUsuario[]>();

  registroSubscription = new Subscription();

  constructor(private http : HttpClient) { }

  ngOnDestroy(): void {
    this.registroSubscription.unsubscribe();
  }

  // Busca todos os registros dos usuários no banco de dados
  buscarRegistroUsuarios(nome : string) {
    this.registroSubscription = this.http.get<{usuarios :RegistroUsuario[]}>(`http://localhost:3001/usuarios/${nome}`)
      .subscribe((retorno) => {
        this.registros = retorno.usuarios;
        this.registrosEmmit.next(this.registros);
      }, (erro) => {
        console.log(erro);
      });
  }

  // Salva um registro no banco de dados
  salvarRegistro(registro : RegistroUsuario, conhecimentos :string[]) {
    return this.http.post<{mensagem: string, resultado :[]}>('http://localhost:3001/usuarios/registrar', {
      ...registro,
      conhecimentos,
    });
  }

  validarRegistro(id : number, status : Boolean) {
    this.http.put('http://localhost:3001/usuarios/atualizar', { id, status }).subscribe((retorno) => {
      console.log(retorno);
    }, (erro) => {
      console.log(erro);
    });
  }
}
