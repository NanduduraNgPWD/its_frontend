import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { todoService } from '../services/to-do.service';

type Todo = {
  _id: string;
  items: string;

}

@Component({
  selector: 'app-to-do-list',
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  constructor(private newTodo: todoService) { }

  item = new FormControl("");
  list: Todo[] = []

  pushToList() {

    this.list.push(this.item.value as unknown as Todo);

    this.item.setValue("")
    return;

  }

  async saveList() {
    const res = await this.newTodo.addTodo(this.list);
    res.subscribe({
      next: () => {
        alert('List saved successfully!');
      },
      error: (err) => {
        alert('Failed to save the list.');
        console.error(err);
      }
    });
  }

}

