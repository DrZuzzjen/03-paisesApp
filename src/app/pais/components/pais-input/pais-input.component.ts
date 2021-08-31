import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs'
import {debounceTime} from 'rxjs/operators'
@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  

  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();

  @Input() placeholder: string = ''
  
  debouncer: Subject<string> = new Subject();
  termino:string =''

  
  ngOnInit(): void {
    this.debouncer
    /* Este pipe nos dice cuanto tiempo de espera antes de emitir el susbcribe */
    .pipe(debounceTime(100))
    .subscribe(valor => {
      this.onDebounce.emit(valor)
      console.log(valor)
    });
  }

  buscar(){
    this.onEnter.emit(this.termino)
}

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }
 

 

}
function debouceTime(debouceTime: any) {
  throw new Error('Function not implemented.');
}

