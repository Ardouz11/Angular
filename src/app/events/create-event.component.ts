import {Component} from '@angular/core'
import {Router} from '@angular/router'
import { EventService } from './shared'
@Component({
    templateUrl:'./create-event.component.html',
   /* template:`
    <h1> New Event</h1>
    <hr/>
    <div class="col-md-6">
        <h3>[Create Event Form will go here]</h3>
        <br/>
        <br/>
        <button type="submit" class ="btn btn-primary">Save</button>
        <button (click)="cancel()" type="button" class ="btn btn-default">Cancel</button>
</div>
    `*/
    styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background color:#E3C3C5;}
  .error ::-webkit-input-placeholder{color:#999;}
  .error ::-moz-placeholder{color:#999;}
  .error :-moz-placeholder{color:#999;}
  .error :-ms-input-placeholder{color:#999;}
  `]

})
export class CreateEventComponent{
    isDirty:boolean=true
    newEvent
    constructor(private router:Router,private eventService:EventService){

    }
    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.isDirty=false
        this.router.navigate(['events'])

    }
cancel(){
    this.router.navigate(['events'])

}
}