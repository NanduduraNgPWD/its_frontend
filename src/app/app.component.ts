import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DisplayQuotesComponent } from './displayquotes/displayquotes.component';

@Component({
  selector: 'app-root',
  imports: [ToDoListComponent, DisplayQuotesComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend1';
}
