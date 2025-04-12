import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Todo = {
  _id: string;
  items: string;

}

@Injectable({
  providedIn: 'root'
})
export class todoService {

  constructor(private http: HttpClient) { }

  Get(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todo');
  }
  async addTodo(list: Todo[]) {
    return this.http.post('http://localhost:3000/todo/create', { items: list });
    // return data.pipe(AsyncPipe);
  }

}
