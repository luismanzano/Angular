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

  lugares:any = [
    {nombre: 'Floreria la Gardenia',
     active:true,
     cercania: 1,
     plan: "pagado",
     distancia: 1
  },
    {nombre: 'Donas la pasadita',
    active:true,
    cercania: 1,
    plan: "gratuito",
    distancia: 1.8
  },
    {nombre: 'Veterinaria Huellitas Felices',
    active:false,
    cercania: 2,
    plan: "pagado",
    distancia: 5
  },
  {nombre: 'Zapateria el Clavo',
  active:false,
  cercania: 3,
  plan: "gratuito",
  distancia: 10
},
  {nombre: 'Sushi Sushiroll',
active:true,
cercania:3,
plan: "pagado",
distancia: 35
},

  ];

  constructor() {
    setTimeout(() => {
      this.listo = true;
      }, 3000)
  }

  hacerAlgo(){
    alert("Haciendo Algo");
  }
}
