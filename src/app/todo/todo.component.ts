import { Component, OnInit, Inject, Input} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Todo } from 'src/interfaces/interfaccia_todo';
import { TodosService } from '../services/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  lista!:Todo[]

  constructor(@Inject(DOCUMENT) private document: Document , private lista_todo:TodosService) { }

  clickme() {
    if (this.document.querySelector('input')!.value !== ''){
      let id:number = this.lista_todo.get_id()
      let elemento_div = this.document.createElement('div')
      let elemento_todo = this.document.createElement('p')
      let elemento_checkbox = this.document.createElement('input')
      let elemento_cancella = this.document.createElement('button')
      elemento_cancella.innerText = 'cancella'
      elemento_cancella.addEventListener('click', ()=>{
        this.lista_todo.remove_todo(id)
        this.lista = this.lista_todo.get_lista()
        elemento_div.remove()
      })
      elemento_checkbox.type = 'checkbox'
      elemento_checkbox.addEventListener('click',()=>{
        if (elemento_checkbox.checked === false){
          this.lista[id].completed = false
        }else{
          this.lista[id].completed = true
        }
      })
      elemento_todo.innerText = this.document.querySelector('input')!.value
      elemento_todo.style.display = 'inline-block'
      elemento_div.appendChild(elemento_todo)
      elemento_div.appendChild(elemento_checkbox)
      elemento_div.appendChild(elemento_cancella)
      this.document.body.appendChild(elemento_div)
      this.lista_todo.aggiungi_todo(elemento_todo.innerText,elemento_checkbox.checked)
    }
  }

  ngOnInit(): void {
    for (let index = 0; index < this.document.body.children.length; index++) {
      let a = this.document.body.children[index] as HTMLElement
      a.style.display = 'block'
      if (a.hasChildNodes()){
        if (a.querySelector('input')!.style !== null && a.querySelector('button')!.style !== null)
        a.querySelector('input')!.style.display = 'inline'
        a.querySelector('button')!.style.display = 'inline'
      }
    }
    this.lista = this.lista_todo.get_lista()
  }

}
