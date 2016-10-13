import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TodoService } from './todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  items: any[] = [];

  constructor(private http: Http, private todoService: TodoService) { }

  todoCount(): number {
    return this.items.filter(x => !x.done).length;
  }

  ngOnInit() {
    this.items = this.todoService.getItems();
  }

  addItem(e: any, nameInput: any): any {
    const name = nameInput.value;
    const newItem = {
      name: 'Loading...',
      done: false,
      highlight: false,
      color: '',
      justAdded: false
    };
    this.items.push(newItem);

    this.http.get('http://www.colr.org/json/color/random').subscribe(res => {
      const color = res.json().colors[0].hex;

      newItem.name = name;
      newItem.justAdded = true;
      newItem.color = color;
      setTimeout(() => {
        newItem.justAdded = false;
      }, 1000);
    });

    nameInput.value = '';
    nameInput.focus();
  }
}
