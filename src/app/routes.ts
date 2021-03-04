import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list-component";
import {Routes} from '@angular/router'
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-router-activator.service";
import { EventListResolver } from "./events/shared/event-list-resolve.service";
import { CreateSessionComponent } from "./events";
export const appRoutes:Routes=[
    {path:'events/create', component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path:'events/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'404', component:Error404Component},
    {path:'events/session/new',component:CreateSessionComponent},
    {path:'user',loadChildren:'./user/user.module#UserModule'}
 

]