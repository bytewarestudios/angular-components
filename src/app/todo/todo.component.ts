import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_DONE }
  from '../global/store/todo/todo.reducer'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos$: Observable<any>;
  public todo: string;
  public editing = false;
  public indexToEdit: number | null;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.todos$ = this.store.select('todoReducer');
  }

  addTodo(value) {
    this.store.dispatch({ 
      type: ADD_TODO,
      payload: { 
        value, 
        done: false 
      } 
    });
    this.todo = '';
  }
  deleteTodo(index) {
    this.store.dispatch({ 
      type: DELETE_TODO,
       payload: { 
         index 
        } 
      });
  }

  editTodo(todo, index) {
    this.editing = true;
    this.todo = todo.value;
    this.indexToEdit = index;
  }

  cancelEdit() {
    this.editing = false;
    this.todo = '';
    this.indexToEdit = null;
  }

  updateTodo(updatedTodo) {
    this.store.dispatch({ 
      type: UPDATE_TODO, 
      payload: { 
        index: this.indexToEdit, 
        newValue: updatedTodo 
      } 
    });
    this.todo = '';
    this.indexToEdit = null;
    this.editing = false;
  }

  toggleDone(todo, index) {
    this.store.dispatch({ 
      type: TOGGLE_DONE, 
      payload: { 
        index, 
        done: todo.done 
      } 
    });
  }

}
