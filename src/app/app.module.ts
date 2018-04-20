import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TooltipComponent, TooltipContainerDirective } from './shared/components/tooltip/tooltip.component';
import { CustomTooltipComponent } from './shared/components/tooltip/tooltip-custom.component';
import { TooltipDirective } from './shared/components/tooltip/tooltip.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
    // TooltipDirective,
    // TooltipComponent,
    // TooltipContainerDirective,
    // CustomTooltipComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  entryComponents: [ TooltipComponent, CustomTooltipComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
