import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
        cursor: Pointer;
      }
  `
  ]
})
export class PorPaisComponent implements OnInit {

  termino : string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos :Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private PaisService:PaisService) { }

  ngOnInit(): void {
  }


  buscar(termino:string){
    this.hayError = false;
    if(termino === ""){return;}
    this.termino = termino;
    this.PaisService.buscarPais(this.termino)
      .subscribe((paises) =>{

          this.paises = paises;
          
      },(err)=>{
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.PaisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,4),
      (err)=> this.paisesSugeridos = []);
  }

  buscarSugerido(termino : string){
    this.buscar(termino);

  }
}
