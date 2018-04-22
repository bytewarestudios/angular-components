import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TooltipComponent, TooltipContainerDirective } from './shared/components/tooltip/tooltip.component';
import { CustomTooltipComponent } from './shared/components/tooltip/tooltip-custom.component';
import { TooltipDirective } from './shared/components/tooltip/tooltip.directive';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './global/store/todo/todo.reducer'
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    StoreModule.forRoot({ todoReducer })
  ],
  exports: [
    TodoComponent
  ],
  entryComponents: [ TooltipComponent, CustomTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
