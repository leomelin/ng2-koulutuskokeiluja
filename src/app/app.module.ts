import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoService } from './todos/todo/todo.service';
import { EditTodoComponent } from './todos/todo/edit-todo/edit-todo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'todos'
}, {
  path: 'todos',
  component: TodosComponent
}, {
  path: 'edit-todo/:index',
  component: EditTodoComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    EditTodoComponent,
    NotFoundComponent,
    CapitalizePipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
