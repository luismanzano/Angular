import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {
      id:1,
     nombre: 'Floreria la Gardenia',
     active:true,
     cercania: 1,
     plan: "pagado",
     distancia: 1,
     descripcion: "Mas adelante le proveeremos una descripcion completa"
  },
    {
      id:2,
      nombre: 'Donas la pasadita',
    active:true,
    cercania: 1,
    plan: "gratuito",
    distancia: 1.8,
    descripcion: "Mas adelante le proveeremos una descripcion completa"
  },
    {
      id:3,
      nombre: 'Veterinaria Huellitas Felices',
    active:false,
    cercania: 2,
    plan: "pagado",
    distancia: 5,
    descripcion: 'Mas adelante le proveeremos una descripcion completa'
  },
  {
    id:4,
    nombre: 'Zapateria el Clavo',
  active:false,
  cercania: 3,
  plan: "gratuito",
  distancia: 10,
  descripcion: "Mas adelante le proveeremos una descripcion completa"
},
  {
    id:5,
    nombre: 'Sushi Sushiroll',
active:true,
cercania:3,
plan: "pagado",
distancia: 35,
descripcion: "Mas adelante le proveeremos una descripcion completa"
},

  ];

  id = null;
  lugar: any = {};



 constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id'])
    console.log(this.route.queryParams['action2']);
    console.log(this.route.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
    this.lugar = this.buscarLugar();
 }

 buscarLugar(){
   return this.lugares.find( lugar => lugar.id == this.id)|| null;
 }
}
