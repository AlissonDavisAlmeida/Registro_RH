import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { RegistroUsuario } from '../../registro/registro/RegistroInterface';

@Component({
  selector: 'app-validar-reg',
  templateUrl: './validar-reg.component.html',
  styleUrls: ['./validar-reg.component.css'],
})
export class ValidarRegComponent implements OnInit {
  usuario : any;

  indice : number = 0;

  constructor(private activeRoute : ActivatedRoute, private registroService : RegistroUsuarioService, private navegar : Router) { }

  // carrega o usuário no registroService através do índice no array
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.indice = +params.indice;
    });
    this.usuario = this.registroService.registros[this.indice];
    console.log(this.usuario);
  }

  // função que valida o usuário no banco de dados
  validarUsuario() {
    this.registroService.validarRegistro(this.usuario.id, !this.usuario.status);
    this.navegar.navigate(['/']);
  }
}
