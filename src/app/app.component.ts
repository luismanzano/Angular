import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platziSquare';
  a = 'Esto es una prueba de String Interpolation';
  b = 5;
  c = 3;
  listo = false;

  constructor() {
    setTimeout(() => {
      this.listo = true;
      }, 3000)
  }

  hacerAlgo(){
    alert("Haciendo Algo");
  }
}
