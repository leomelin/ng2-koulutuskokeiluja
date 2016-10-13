import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: any;

  @Input()
  index: number;

  constructor() { }

  itemCheckboxChanged(checked: boolean): void {
    this.todo.done = checked;
  }

  ngOnInit() {
  }

}
