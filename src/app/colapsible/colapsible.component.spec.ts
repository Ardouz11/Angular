import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColapsibleComponent } from './colapsible.component';

describe('ColapsibleComponent', () => {
  let component: ColapsibleComponent;
  let fixture: ComponentFixture<ColapsibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColapsibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
