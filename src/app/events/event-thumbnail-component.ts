import {Component,Input} from '@angular/core'
@Component({
    selector:'event-thumbnail',
    template:`
    <div [routerLink]="['/events',eventThumbnail.id]" class="well hoverwell thumbnail">
    <h2>{{eventThumbnail?.name}}</h2>
    <div> Date:{{eventThumbnail?.date}}</div>
    <div [ngSwitch]="eventThumbnail?.time"> 
    Time:{{eventThumbnail?.time}}
    <span *ngSwitchCase="'8:00 am'">(Early Start) </span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div> Price:{{eventThumbnail?.price}}\$</div>
    <div *ngIf="eventThumbnail?.location">
    <span>location :{{eventThumbnail?.location?.address}}</span>
    <span class="pad-left">{{eventThumbnail?.location?.city}},{{eventThumbnail?.location?.country}}</span>
    </div>
    <div *ngIf="eventThumbnail?.onlineUrl">
    Online URL:{{eventThumbnail?.onlineUrl}}
    </div>
    </div>`,
    styles:[`
    .thumbnail {min-height:210px}
    .pad-left{margin-left:10px;}
    .well div{color:#bbb;}
    `]
})
export class EventThumbnailComponent{
@Input() eventThumbnail:any
/*
@Output() eventClick=new EventEmitter()
handleClickMe(){
    //console.log("it works")
    this.eventClick.emit(event.name)
}*/
}