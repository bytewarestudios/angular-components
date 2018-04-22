import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { AngularLinksComponent } from './shared/components/angular-links/angular-links.component';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'resources',
    component: AngularLinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
