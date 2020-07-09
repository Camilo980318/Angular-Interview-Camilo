import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GetDataService {

  // Para almacenar la info del post seleccionado
  postSelected: any;

  constructor() { }

  // Accedemos a la API para obtener a la lista de posts
  getData() {
    return fetch('https://jsonplaceholder.typicode.com/posts');
  }

  // Asignamos el post seleccionado a la variable postSelected
  getPost(post: any) {
    this.postSelected = post;
  }

  // Accedemos a la API para obtener a la lista de comentarios respecto al id de posts
  getComentarios(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }

}
