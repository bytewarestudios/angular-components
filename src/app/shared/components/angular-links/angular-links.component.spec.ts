import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLinksComponent } from './angular-links.component';

describe('AngularLinksComponent', () => {
  let component: AngularLinksComponent;
  let fixture: ComponentFixture<AngularLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
