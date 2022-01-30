import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistroUsuario } from '../components/registro/registro/RegistroInterface';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService implements OnDestroy {
  registros : RegistroUsuario[] = [];

  registroSubscription = new Subscription();

  constructor(private http : HttpClient) { }

  ngOnDestroy(): void {
    this.registroSubscription.unsubscribe();
  }

  buscarRegistroUsuarios() {
    this.registroSubscription = this.http.get('http://localhost:3001/usuarios').subscribe((retorno) => {
      console.log(retorno);
    }, (erro) => {
      console.log(erro);
    });
  }

  salvarRegistro(registro : RegistroUsuario, conhecimentos :string[]) {
    this.http.post('http://localhost:3001/usuarios/registrar', {
      ...registro,
      conhecimentos,
    });
  }
}
