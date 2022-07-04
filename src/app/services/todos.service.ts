import { Injectable } from '@angular/core';
import { Todo } from 'src/interfaces/interfaccia_todo';

let lista:Todo[]
if (lista! === undefined){
  lista = []
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private id:number = 0
  private lista_todo:Todo[] = lista

  constructor() {}

  aggiungi_todo(title:string,completed:boolean){
    let id:number = this.id
    this.lista_todo.push({id, title, completed})
    lista = this.lista_todo
  }

  remove_todo(id:number){
    this.lista_todo.splice(id,1)
  }

  get_lista(){
    return lista
  }
  get_id(){
    return this.id
  }
}
