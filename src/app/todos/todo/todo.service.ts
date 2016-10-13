import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private items: any[] = [
    {name: 'Pese kissa', done: false, highlight: false, assignee: 'John'},
    {name: 'Ime parsaa', done: false, highlight: false, assignee: 'John'}
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItemByIndex(index: number): any {
    return this.items[index];
  }
}
