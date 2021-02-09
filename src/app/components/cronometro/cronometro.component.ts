import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

    @Input() inicio: number;

    @Output() terminoCronometro: EventEmitter<string>;

    contador:number;

  constructor() { 
    this.contador = 10;
    this.inicio = 0;

    this.terminoCronometro = new EventEmitter;


  }

  ngOnInit(): void {
    this.contador = this.inicio ? this.inicio: 10;
  }

  onClinck(){
    let interval = setInterval(()=> {
      this.contador--;
      if(this.contador < 0 ){
        clearInterval(interval);
        this.contador = this.inicio;

        this.terminoCronometro.emit("finaliza el cronometro en el numero:"+this.inicio);

      }
    }, 1000);

  }

}
