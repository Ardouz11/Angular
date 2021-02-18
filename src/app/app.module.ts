import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-router-activator.service';
import { EventListResolver } from './events/shared/event-list-resolve.service';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,

  ],
  providers: [EventService,EventRouteActivator,
  {
    provide:'canDeactivateCreateEvent',
    useValue:checkDirtyState
  },EventListResolver], 
  //to add some services
  bootstrap: [EventsAppComponent]
})

export class AppModule { }
export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
  {
    return window.confirm('You have not saved the event ,do you want to cancel it?')
  }
  return true
}
