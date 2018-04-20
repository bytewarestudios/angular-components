import { Component, OnInit } from '@angular/core';
import { CustomTooltipComponent } from './shared/components/tooltip/tooltip-custom.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public testComponent;
  title = 'Angular Components';

  ngOnInit() {
    this.testComponent = CustomTooltipComponent;
  }
}
