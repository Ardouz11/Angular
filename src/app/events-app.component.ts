import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template:`
  <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = 'Ardouz App';
}