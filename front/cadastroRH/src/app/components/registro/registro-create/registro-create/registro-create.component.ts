import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor(private http : HttpClient) { }

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
    console.log(myForm.value);
  }
}
