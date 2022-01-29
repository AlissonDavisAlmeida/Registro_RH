import { Component, OnInit } from '@angular/core';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { RegistroUsuario } from './RegistroInterface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registros : RegistroUsuario[] = [];

  constructor(private registroService : RegistroUsuarioService) { }

  ngOnInit(): void {
    this.registroService.buscarRegistroUsuarios();
  }
}
