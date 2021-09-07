import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Capital } from '../../interfaces/capital.interface';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {
  termino : string = "";
  hayError: boolean = false;
  capital: Capital[] = [];
  constructor(private CapitalService:PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    if(termino === ""){return;}
    this.termino = termino;
    this.CapitalService.buscarCapital(this.termino)
      .subscribe((capital) =>{
        this.capital = capital;
      },(err)=>{
        this.hayError = true;
        this.capital = [];
      });
  }

  sugerencias(termino:string){
    this.hayError=false;
    
  }

  ngOnInit(): void {
  }

}
