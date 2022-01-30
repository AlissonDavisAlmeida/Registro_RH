import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  conhecimentos : ConhecimentoInterface[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

  }

  enviarForm(myForm : NgForm) {
    console.log(myForm);
  }
}
