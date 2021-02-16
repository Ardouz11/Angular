import {Component} from '@angular/core'
import { EventListener } from '@angular/core/src/debug/debug_node'
@Component({
    selector:'events-list',
   // templateUrl:'./events-list-component.html'
    template:`
    <div>
    <h1>Upcoming Angular Events </h1>
    <hr/>
    <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
    `,
    styles:[`
    `]

})
export class EventsListComponent{
    event1={
        id:1,
        name:'Angular Connect',
        date:'6/4/1998',
        time:'10:00 am',
        price:599.99,
        imageUrl:'/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'London',
            country:'England'
        }
    }
    handleEventClicked(data){
        console.log("received :",data)
    }
}