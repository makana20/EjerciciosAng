import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero: string[];


  constructor(){

    this.numero = ["1","43","8","13"];
  }
  
}
