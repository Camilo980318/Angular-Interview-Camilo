import { Component, OnInit, Input } from '@angular/core';
import { GetDataService } from 'src/app/services/services.index';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  data: any;
  fecha: string;

  // Inyectamos el servicios y definimos el router
  constructor(public _dataService: GetDataService) { }

  // Obtenemos el dato Seleccionado
  ngOnInit() {
    this.data = this._dataService.postSelected;
  }

  // Obtenemos la fecha que proviene del componente
  getFecha(fecha: Date) {
    this.fecha = fecha.toDateString();
  }

}
