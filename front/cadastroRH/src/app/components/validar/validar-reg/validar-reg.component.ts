import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-validar-reg',
  templateUrl: './validar-reg.component.html',
  styleUrls: ['./validar-reg.component.css'],
})
export class ValidarRegComponent implements OnInit {
  constructor(private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.params);
  }
}
