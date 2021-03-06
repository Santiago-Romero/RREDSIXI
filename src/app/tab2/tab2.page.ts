import { Component } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  proyectos;
  proyectosFiltro=[];
  hideMe=true;
  hideMe2=false;
  hideMe3=false;
  proyectico;
  losQueVan=[];

  constructor(public datos:DatosService) {}

  ionViewDidEnter(){
    this.hideMe=true;
    this.hideMe2=false;
    this.hideMe3=false;
    this.datos.obtenerDatos2().subscribe(
      (data)=> {this.proyectos = data['agenda'];},
      (error)=>{console.log(error);}
    );
  }

  filtro(q: string,combo: string){

    var even = function(autores) {
      // checks whether an element is even
      //return autores.nombres.toLowerCase() === q.toLowerCase();
      return autores.nombres.toLowerCase().includes(q.toLowerCase());
    };

    this.proyectosFiltro=[]
    this.losQueVan=[]
    this.hideMe = false;
    this.hideMe2 = true;
    this.hideMe3= false;
    this.datos.obtenerDatos2().subscribe(
      (data)=> {this.proyectos = data['agenda'];},
      (error)=>{console.log(error);}
    );
    if(combo=='evaluador'){
      //this.elFiltroAutor(q);
      this.proyectosFiltro = this.proyectos.filter(proyecto => proyecto.autores.some(even))
    }else if(combo=='ies'){
      // this.elFiltroTrabajo(q,'sede');
      this.proyectosFiltro = this.proyectos.filter(proyecto => proyecto.trabajo.sede.toLowerCase().includes(q.toLowerCase()));
    }else if(combo=='autor'){
      //this.elFiltroAutor(q);
      this.proyectosFiltro = this.proyectos.filter(proyecto => proyecto.autores.some(even))
    }else if(combo=='area'){
      this.proyectosFiltro = this.getFilteredByKey(this.proyectos, "campus", q.toLowerCase());
    }else{
      this.elFiltroTrabajo(q,'titulo');
    }
    if(this.proyectosFiltro.length==0){
      this.hideMe3=true;
    }
  }

  // elFiltroAutor(q:String){
  //   for(var i=0;i<this.proyectos.length;i++){
  //     for(var j=0;j<this.proyectos[i].autores.length;j++){
  //       if(this.proyectos[i].autores[j].nombres.toLowerCase()==q.toLowerCase()){
  //         this.losQueVan.push(i)
  //       }
  //     }
  //   }
  //   for(var x=0;x<this.losQueVan.length;x++){
  //     this.proyectosFiltro.push(this.proyectos[this.losQueVan[x]])
  //   }
  // }

  elFiltroTrabajo(q:String,sub){
    for(var i=0;i<this.proyectos.length;i++){
        if(this.proyectos[i].trabajo[sub].toLowerCase().includes(q.toLowerCase())){
          this.losQueVan.push(i)
        }
    }
    for(var x=0;x<this.losQueVan.length;x++){
      this.proyectosFiltro.push(this.proyectos[this.losQueVan[x]])
    }
  }
  getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key.toLowerCase()].toLowerCase().includes(value.toLowerCase());
    });
  }
}
