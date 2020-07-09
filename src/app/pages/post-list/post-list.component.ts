import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/services.index';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: any[];

  // Inyectamos el servicios y definimos el router
  constructor(public _dataService: GetDataService, public router: Router) { }

  ngOnInit(): void {
    this.getData()
  }

  // Accedemos los datos provenientes del servicio y a su vez, los asignamos al array data
  getData() {
    this._dataService.getData()
      .then(resp => resp.json())
      .then(response => this.data = response);

    // Eliminamos la bandera cuando iniciemos la página post
    localStorage.removeItem('selected');
  }

  // Obtenemos el post seleccionado
  getDetails(post: any) {
    // Creamos la bandera para saber si se seleccionó uno
    localStorage.setItem('selected', JSON.stringify(true));
    this._dataService.getPost(post);
    this.router.navigate(['post', post.id]);
  }
}
