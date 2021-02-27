import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'

@Component({
 /* template: `
    <h1>Edit Your Profile</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Edit profile form will go here]</h3>
      <br />
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  `*/
  templateUrl:'./profile.component.html',
  styles:[`
  em{float:right;color:#E05C65;padding-left:10px;}
  .error input {background color:#E3C3C5;}
  .error ::-webkit-input-placeholder{color:#999;}
  .error ::-moz-placeholder{color:#999;}
  .error :-moz-placeholder{color:#999;}
  .error :-ms-input-placeholder{color:#999;}
  `]
})
export class ProfileComponent implements OnInit{
  profileForm:FormGroup
  private firstName:FormControl
  private lastName:FormControl
  constructor(private router:Router, private authService:AuthService){

  }
  ngOnInit(){
     this.firstName= new FormControl(this.authService.currentUser.firstName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
     this.lastName=new FormControl(this.authService.currentUser.lastName,[Validators.required,Validators.pattern('[a-zA-Z].*')])
    this.profileForm=new FormGroup({
      firstName:this.firstName,
      lastName:this.lastName
    })
  }
  cancel(){
    this.router.navigate(['events'])
  }
  saveProfile(formValues){
    if(this.profileForm.valid){
    this.authService.updateCurrentUser(formValues.firstName,formValues.lastName)
    this.router.navigate(['events'])
  }}
  validateLastName(){
   return this.lastName.valid || this.lastName.touched
  }
  validateFirstName(){
    return this.firstName.valid || this.firstName.touched
   }
       
}