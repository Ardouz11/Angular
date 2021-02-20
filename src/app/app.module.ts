import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{
  NavBarComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component,
  EventRouteActivator,
  EventListResolver,
  EventsListComponent
}from './events/index'
import { EventsAppComponent } from './events-app.component';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {appRoutes} from './routes'
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';
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
