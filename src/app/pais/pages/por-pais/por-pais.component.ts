import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    th.h5{
      font-size: 12 px;
    }
    `
  ]
})
export class PorPaisComponent {

  termino:string='';
  hayError:boolean=false;
  paises:Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    

    this.paisService.buscarPais(this.termino)
      .subscribe( (resp) =>{
        this.paises = resp
        
        console.log(resp);
        }, (err) => {
          this.hayError = true;
          this.paises = [];

        })
  }

  sugerencias(termino:string){
    this.hayError = false;
      //TODO: crear sugerencias
  }
}