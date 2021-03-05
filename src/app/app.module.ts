import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{
  NavBarComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component,
 
  EventListResolver,
  EventsListComponent
}from './events/index'
import { EventsAppComponent } from './events-app.component';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionListCompoenent } from './events/event-details/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventRouteActivator } from './events/event-details/event-router-activator.service';
import { ColapsibleComponent } from './colapsible/colapsible.component';
import { DurationPipe } from './events/shared/duration.pipe';
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
   
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    ColapsibleComponent,
    SessionListCompoenent,
    CreateSessionComponent,
    ColapsibleComponent,
    DurationPipe

  ],
  providers: [EventService,EventRouteActivator,
  {
    provide:'canDeactivateCreateEvent',
    useValue:checkDirtyState
  },EventListResolver,AuthService], 
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
