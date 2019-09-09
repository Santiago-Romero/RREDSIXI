import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  proyectos
  autores

  constructor(public datos:DatosService) {}

  ionViewDidEnter(){
    this.datos.obtenerDatos().subscribe(
      (data)=> {this.proyectos = data.agenda;},
      (error)=>{console.log(error);}
    );
  }
}
