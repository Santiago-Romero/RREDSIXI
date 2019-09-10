import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  proyectos
  autores

  constructor(public datos:DatosService) {}

  ionViewDidEnter(){
    this.datos.obtenerDatos().subscribe(
      (data)=> {this.proyectos = data['agenda'];},
      (error)=>{console.log(error);}
    );
  }

}
