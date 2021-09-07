import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles:[`
    button{
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent implements OnInit {
  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva : string = "";
  region: Country[] = [];
  hayError: boolean = false;
  constructor(private regionService:PaisService) { }

  activarRegion(region:string){
    this.hayError = false;
    if(region === this.regionActiva){return;}
    this.regionActiva = region;
    
    this.region = [];
    this.regionService.buscarRegion(region)
    .subscribe((paises) =>{
      this.hayError = true;
      this.region = paises;
    });
  }

  

  getClaseCSS(region:string){
    return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
  }

  ngOnInit(): void {
  }

}
