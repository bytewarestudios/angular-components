import { Component, OnInit } from '@angular/core';
import { CustomTooltipComponent } from './shared/components/tooltip/tooltip-custom.component';
import { AppModule } from './app.module';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public testComponent;
  title = 'Angular Components';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.testComponent = CustomTooltipComponent;
    this.http.get('/api/account/users')
      .map(res => res)
      .subscribe(test => console.log('test: ', test));

  }
}
