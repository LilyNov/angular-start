import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;
  inputTodo: string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      }
    ]
  }

  toggleDoneToDo(id: number): void {
    this.todos?.map((value, index) => {
      if (index === id) {
        value.completed = !value.completed
      }
      return value
    })
  }

  deleteToDo(id: number): void {
    this.todos = this.todos?.filter((value, index) => index !== id)
  }

  addToDo() {
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = ""
  }

}
