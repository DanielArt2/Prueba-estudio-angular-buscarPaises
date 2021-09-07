import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder:string = "";
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  descripcion: string = "";
  termino : string = "";

  constructor() { }


  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }

}
