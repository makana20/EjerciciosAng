import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero: number[];


  constructor(){

    this.numero = [52,43,8,13];
  }
  


 onTerminaCronometro($event){

    console.log($event);
  }
}
