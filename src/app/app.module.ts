import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent, TooltipContainerDirective } from './directives/tooltip.component';
import { CustomTooltipComponent } from './directives/tooltip-custom.component';


@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipContainerDirective,
    CustomTooltipComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [ TooltipComponent, CustomTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
