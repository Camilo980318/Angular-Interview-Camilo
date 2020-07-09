import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetDataService } from 'src/app/services/services.index';



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  // Recibimos el id del post y enviamos la fecha
  @Input('id') id;
  @Output('fecha') fecha: EventEmitter<Date> = new EventEmitter();

  cometarios: any[];

  // Inyectamos el servicios y definimos el router
  constructor(public _dataService: GetDataService) { }

  ngOnInit() {
    this.getComentarios();
  }

  // Obtenemos los comentarios del servicio y lo asignamos a comentarios:any[]
  getComentarios() {
    this._dataService.getComentarios(this.id)
      .then(resp => resp.json())
      .then(response => this.cometarios = response);
  }

  // Emitimos la fecha
  emitirFecha() {
    let fecha = new Date();
    this.fecha.emit(fecha);
  }

}
