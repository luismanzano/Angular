import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
 
  title = 'platziSquare';
  a = 'Esto es una prueba de String Interpolation';
  b = 5;
  c = 3;
  listo = false;

  lugares:any = [
    {
      id:1,
     nombre: 'Floreria la Gardenia',
     active:true,
     cercania: 1,
     plan: "pagado",
     distancia: 1
  },
    {
      id:2,
      nombre: 'Donas la pasadita',
    active:true,
    cercania: 1,
    plan: "gratuito",
    distancia: 1.8
  },
    {
      id:3,
      nombre: 'Veterinaria Huellitas Felices',
    active:false,
    cercania: 2,
    plan: "pagado",
    distancia: 5
  },
  {
    id:4,
    nombre: 'Zapateria el Clavo',
  active:false,
  cercania: 3,
  plan: "gratuito",
  distancia: 10
},
  {
    id:5,
    nombre: 'Sushi Sushiroll',
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
