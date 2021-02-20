import {Component} from '@angular/core'
import {EventService} from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../shared'
@Component({
    selector:'event-details',
    templateUrl:'./event-details.component.html',
    styles:[`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    `]
})
export class EventDetailsComponent{
    event:IEvent
    constructor(private eventService:EventService,private activatedRoute:ActivatedRoute){

    }
    ngOnInit(){
        this.event=this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])

    }

}