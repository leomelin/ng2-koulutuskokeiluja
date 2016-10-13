import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  index: number;
  todo: any;
  modifiedTodo: any;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private router: Router) { }

  goBack(e: any): void {
    this.router.navigate(['todos']);
  }

  saveTodo(e: any) {
    e.preventDefault();
    this.todo = Object.assign(this.todo, this.modifiedTodo);
    this.router.navigate(['todos']);
  }

  debug(obj: any) {
    console.log(JSON.stringify(obj));
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.index = +params.index;
      const foundTodo = this.todoService.getItemByIndex(this.index);
      if (!foundTodo) {
        return this.router.navigate(['']);
      }
      this.todo = foundTodo;
      this.modifiedTodo = Object.assign({}, this.todo);
    });
  }

}
