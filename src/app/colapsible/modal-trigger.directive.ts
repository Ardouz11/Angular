import { Directive, ElementRef, Inject, Input, OnInit } from "@angular/core";
import { JQUERY_TOKEN } from "./JQuery.service";

@Directive({
    selector:'[modal-trigger]'
})
export class ModalTriggerDitrective implements OnInit{
    private el:HTMLElement
    @Input('modal-trigger') modalId:string
    constructor(ref:ElementRef,@Inject(JQUERY_TOKEN) private $:any){
 this.el=ref.nativeElement
    }
    ngOnInit(){
        this.el.addEventListener('click',e=>{
            this.$(`#${this.modalId}`).modal({})
        })
        
    }
}