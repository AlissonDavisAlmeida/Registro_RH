import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroUsuario } from '../components/registro/registro/RegistroInterface';

@Injectable({
  providedIn: 'root',
})
export class RegistroUsuarioService {
  registros : RegistroUsuario[] = [];

  constructor(private http : HttpClient) { }

  buscarRegistroUsuarios() {
    this.http.get('http://localhost:3001/usuarios').subscribe((retorno) => {
      console.log(retorno);
    }, (erro) => {
      console.log(erro);
    });
  }
}
