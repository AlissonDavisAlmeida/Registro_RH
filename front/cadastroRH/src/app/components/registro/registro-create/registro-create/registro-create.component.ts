import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { RegistroUsuarioService } from 'src/app/services/registro-usuario.service';
import { RegistroUsuario } from '../../registro/RegistroInterface';

// Interface que representa a tabela de conhecimentos no banco de dados
interface ConhecimentoInterface{
  id : number
  nome : string
}

@Component({
  selector: 'app-registro-create',
  templateUrl: './registro-create.component.html',
  styleUrls: ['./registro-create.component.css'],
})
export class RegistroCreateComponent implements OnInit {
  // Variável para armazenar a query
  conhecimentos : ConhecimentoInterface[] = [];

  // Mensagem para configurar o modal
  mensagemRetornoBackEnd : string = '';

  // Flag para configurar o titulo da mensagem do modal
  isSuccess : Boolean = false;

  // Verifica se o checkbox é válido
  isCheckValid : Boolean = false;

  constructor(private http : HttpClient, private registroService : RegistroUsuarioService) { }

  ngOnInit(): void {
    // No carregamento do componente todos os conhecimentos são carregados através do Back end
    this.http.get('http://localhost:3001/conhecimentos').subscribe((retorno) => {
      const conhecimentoJson = JSON.stringify(retorno);

      const arrayInterm = Object.values<[ConhecimentoInterface]>(JSON.parse(conhecimentoJson));
      this.conhecimentos = arrayInterm[0];
    }, (erro) => {
      console.log(erro);
    });
  }

  enviarForm(myForm : NgForm) {
    // Valores do formulário
    const objetoForm = myForm.value;
    // Array que vai popular os checkboxs que foram selecionados pelo usuário
    const conhecimentoArray = [];
    // Objeto registro que vai ser passado para o Banco de dados
    const registro : RegistroUsuario = {
      nome: objetoForm.nome,
      cpf: objetoForm.cpf,
      email: objetoForm.email,
      celular: objetoForm.celular,
    };

    const conhecimentos = objetoForm.conhecimentos;
    for (const key in conhecimentos) {
      if (conhecimentos[key] === true) {
        conhecimentoArray.push(key);
      }
    }
    this.registroService.salvarRegistro(registro, conhecimentoArray).subscribe((retorno) => {
      console.log(retorno);
      this.mensagemRetornoBackEnd = retorno.mensagem ? retorno.mensagem : 'Ocorreu um erro no banco de dados';
      this.isSuccess = true;
    }, (erro) => {
      console.log(erro.error.mensagem);
      this.mensagemRetornoBackEnd = erro.error.mensagem;
    });
  }

  // método para verificar se o usuário selecionou entre 1 e 3 conhecimentos
  verificarCheck(myForm : NgForm) {
    let conhecimentos = myForm.value.conhecimentos;
    // Para validar se o usuário selecionou a quantidade correta, é extraido os valores dos objetos e verificado quais valores são true com o reduce, caso
    // algum valor seja true é incrementado no acumulador
    conhecimentos = Object.values(conhecimentos || '');
    const isMaxMin = conhecimentos.reduce((acc :any, atual:any) => {
      if (atual === true) {
        acc += 1;
      }
      return acc;
    }, 0);
    if (isMaxMin < 1 || isMaxMin > 3) {
      this.isCheckValid = false;
      return true;
    }
    this.isCheckValid = true;
    return false;
  }
}
