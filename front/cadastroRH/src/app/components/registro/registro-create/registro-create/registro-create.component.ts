import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-create',
  templateUrl: './registro-create.component.html',
  styleUrls: ['./registro-create.component.css'],
})
export class RegistroCreateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  enviarForm(myForm : NgForm) {
    console.log(myForm);
  }
}
