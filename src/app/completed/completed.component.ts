import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  lista_todo!:TodosService

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.lista_todo = new TodosService()
  }

  ngOnInit(): void {

    for (let index = 0; index < this.document.body.children.length; index++) {
      if (index > 1){
          let a = this.document.body.children[index] as HTMLElement
          a.style.display = 'none'
      }
    }


    for (let index = 0; index < this.document.body.children.length; index++) {
      if (index > 1){
          let a = this.document.body.children[index] as HTMLElement
          a.style.display = 'none'
      }
    }
    let elemento_p = this.document.createElement('p')
    elemento_p.innerText = '...caricando i todo completati...'
    this.document.body.appendChild(elemento_p)
    setTimeout(() => {
      for (let index = 0; index < this.document.body.children.length; index++) {
        if (index > 2){
          if (!this.document.body.children[index].querySelector('input')?.checked === true){
            let elemento_figlio = this.document.body.children[index] as HTMLElement
            elemento_figlio.style.display = 'none'
          } else{
            let a = this.document.body.children[index] as HTMLElement
            a.style.display = 'block'
            a.querySelector('input')!.style.display = 'none'
            a.querySelector('button')!.style.display = 'none'
          }
        }
      }
      elemento_p.remove()
    }, 2000);
  }
}
