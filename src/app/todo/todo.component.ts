import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'meet stella',
      completed: false,
    },
    {
      task: 'eat dinner',
      completed: false,
    },
    {
      task: 'study',
      completed: true,
    },
  ];
  filterToDos: string = '';
  constructor() {}

  ngOnInit(): void {}

  addTask = (form: NgForm): void => {
    let newToDo: Todo = {
      task: form.value.addTask,
      completed: false,
    };
    this.todos.push(newToDo);
  };

  removeTask = (type: string, index: number): void => {
    type === 'todo' ? this.todos.splice(index, 1) : this.todos.splice(index, 1);
  };

  completeTask = (todo: Todo): void => {
    todo.completed = true;
  };

  filetrToDos = (): Todo[] => {
    if (!this.filterToDos) {
      return this.todos;
    } else {
      return this.todos.filter((todos) => {
        let currentTask = todos.task.toLowerCase().trim();
        return currentTask.includes(this.filterToDos.toLowerCase().trim());
      });
    }
  };
  setFilterToDos = (form: NgForm): void => {
    this.filterToDos = form.value.searchTerm;
  };
}
