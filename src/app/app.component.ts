import { Component, VERSION} from '@angular/core';

import { Notas } from './notas';


@Component({

  selecton:'my-app';

  templateUrls:'.app.Component.html'

  styleUrls:['.app.component.css']

})

  export class AppComponent {

  name = 'Angular' + VERSION.najor;

  resultado:number;

  notas: Notas;

  constructor(){

  this.notas = new Notas;
  media_Aritmetica:number;
  media_Ponderada:number;

  }

  

  

verificarClick():void{

this.media_Aritmetica = this.notas.CalcularMedia();

this.media_Ponderada = this.notas.CalcularMedia();

    

  }

}