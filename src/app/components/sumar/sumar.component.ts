import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  resultado: number;
  
  constructor() {
    this.num1 = "7";
    this.num2 = "7";
    this.resultado= 0;
   }

  ngOnInit(): void {
  }

  onClick(){
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

}
