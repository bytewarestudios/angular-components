import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent, TooltipContainerDirective } from './components/tooltip/tooltip.component';
import { TooltipDirective } from './components/tooltip/tooltip.directive';
import { CustomTooltipComponent } from './components/tooltip/tooltip-custom.component';
import { AngularLinksComponent } from './components/angular-links/angular-links.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipContainerDirective,
    CustomTooltipComponent,
    AngularLinksComponent,
    AngularLinksComponent
  ],
  exports: [
    TooltipComponent,
    TooltipDirective,
    TooltipComponent,
    TooltipContainerDirective,
    CustomTooltipComponent,
    AngularLinksComponent
  ]
})
export class SharedModule { }
