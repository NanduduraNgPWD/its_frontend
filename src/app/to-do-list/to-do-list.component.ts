import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {

  item = new FormControl("");
  list: string[] = []

  pushToList() {

    this.list.push(this.item.value as string);

    this.item.setValue("")
    return;

  }
}

